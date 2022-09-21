import * as nodered from "node-red";
import { DaqifiDevice } from "../DaqifiDevice";
import { NyquistNodeDef } from "./NyquistNodeDef";


export = (RED: nodered.NodeAPI): void => {
  function Nyquist(this: nodered.Node, config: NyquistNodeDef) {
    console.log(config);
      RED.nodes.createNode(this ,config);
      const device = new DaqifiDevice(config.hostOrIp, config.port);
      device.connect().then(() => {

        device.analogInChannel(0, config.analogCh1 ?? false)
          .analogInChannel(1, config.analogCh2 ?? false)
          .analogInChannel(2, config.analogCh3 ?? false)
          .analogInChannel(3, config.analogCh4 ?? false)
          .analogInChannel(4, config.analogCh5 ?? false)
          .analogInChannel(5, config.analogCh6 ?? false)
          .analogInChannel(6, config.analogCh7 ?? false)
          .analogInChannel(7, config.analogCh8 ?? false);
        
        device.startStreaming(Number(config.sampleRate));
      }, err => {
        console.error(err);
      });
      device.on("streamdata", msg => {
        this.send({payload: msg});
      });
      device.on("error", err => {
        console.error(err);
      });
      // this.on('input', function(msg: any, send: (message: any) => void) {
      //     send(msg);
      // });
      this.on('close', function() {
        device.close();
      });
  }
  RED.nodes.registerType("nyquist",Nyquist);
}