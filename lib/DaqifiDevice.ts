import EventEmitter from "events";
import {Socket} from "net"
import { Reader } from "protobufjs";
import { DaqifiOutMessage } from "../protos/DaqifiOutMessage";

interface StreamData {
  analogIn: number[];
}

export interface DaqifiDevice {
  on(event: "error", listener: (error: Error) => void): this;
  on(event: "connect", listener: () => void): this;

  on(event: "streamdata", listener: (data: StreamData) => void): this;
}

export class DaqifiDevice extends EventEmitter {
  private _socket: Socket;
  private _analogChannelMask: Uint8Array = Uint8Array.from([0x00]);

  public adcResolution = 4096;

  constructor(public host: string, public port: number = 9760) {
    super();
    this._socket = new Socket();
    this._socket.on("error", error => this.emit("error", error));
    this._socket.on("connect", () => this.emit("connect", arguments));

    this._socket.on("data", this._handleData);
  }

  /**
   * Connects to the device. Returns a promise that resolves
   *  on the "connect" event. Promise is rejected on an "error"
   *  event occuring before "connect"
   * @returns 
   */
  public connect() {
    return new Promise<void>((resolve, reject) => {
      const rejectOnError = (error: Error) => reject(error);
      this._socket.once("error", rejectOnError);
      this._socket.connect({ host: this.host, port: this.port }, () => {
        this._socket.removeListener("error", rejectOnError);
        this._sendCommand("system:echo -1");
        this._sendCommand("SYSTem:SYSInfoPB?");
        resolve();
      });
    });
  }

  public close() {
    this._socket.destroy();
  }

  private _sendCommand(command: string) {
    this._socket._write(command + "\r\n", "utf-8", (error) => {
      if(error) {
        console.error("Error sending command", error);
      }
    });
  }

  private _parseMessages() {
    const reader = new Reader(this._buf);
    const length = reader.int32();
    if(this._buf.byteLength < length) {
      return false;
    }
    
    const startingPosition =  reader.pos;
    const daqifiMessage = DaqifiOutMessage.decode(reader, length);
    if(daqifiMessage.devicePn) {
      if(daqifiMessage.analogInRes) {
        this.adcResolution = daqifiMessage.analogInRes;
      }
    } else {
      this.emit("streamdata", {
        analogIn: daqifiMessage.analogInData.map((intEncoded, index) => {
          const calM = daqifiMessage.analogInCalM[index];
          const analogInPortRange = daqifiMessage.analogInPortRange[index];
          const analogInIntScaleM =  daqifiMessage.analogInIntScaleM[index];
          const calB = daqifiMessage.analogInCalB[index];
          return  (intEncoded / this.adcResolution)* analogInPortRange * calM*analogInIntScaleM +calB;
        })
      });
    }
    const protoMessageSize = startingPosition+length;
    if(protoMessageSize < this._buf.byteLength) {
      const remainingBytes = this._buf.byteLength - protoMessageSize;
      const reaminaingBuffer = Buffer.allocUnsafe(remainingBytes);
      this._buf.copy(reaminaingBuffer, 0, protoMessageSize);
      this._buf = reaminaingBuffer;
    } else {
      this._buf = Buffer.from([]);
    }
    return this._buf.byteLength > 0;
  }

  _buf: Buffer = Buffer.from([]);
  private _handleData = (buffer: Buffer) => {
    this._buf = Buffer.concat([this._buf, buffer]);
    while(this._parseMessages()) {
      // Empty
    }
  }

  public analogInChannel(channel: number, enabled: boolean) {
    if(channel > 7) {
      throw new Error("Channel must be a value between 0 and 7");
    }
    const channelMask = 1 << channel;
    console.log(this._analogChannelMask)
    const currentMask = this._analogChannelMask[0] ?? 0x00;
    if(enabled) {
     this._analogChannelMask.set([currentMask | channelMask]);
    } else {
      this._analogChannelMask.set([currentMask & (channelMask ^ 0xFF)]);
    }
    return this;
  }

  public startStreaming(samplesPerSecond: number = 10) {
    const currentMask = this._analogChannelMask[0] ?? 0x00;
    this._sendCommand(`ENAble:VOLTage:DC ${currentMask}`);
    this._sendCommand(`SYSTem:StartStreamData ${samplesPerSecond}`);
  }

  public stopStreaming(){
    this._sendCommand("SYSTem:StopStreamData")
  }
}