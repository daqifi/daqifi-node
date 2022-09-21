/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

/** Put repetitive information in first 15 fields to keep encoded data as short as possible */
export interface DaqifiOutMessage {
  /** Begin streaming data */
  msgTimeStamp: number;
  /** Analog in data int (maximum 24bit/ch) (available to user) */
  analogInData: number[];
  /** Analog in data float (after cal calcs)(available to user) */
  analogInDataFloat: number[];
  /** Analog in data timestamp offset (value should be added to msg_time_stamp for absolute timestamp) */
  analogInDataTs: number[];
  /** Digital IO data (bitwise binary representation LSB=ch0) */
  digitalData: Uint8Array;
  /** Digital IO data timestamp offset (value should be added to msg_time_stamp for absolute timestamp) */
  digitalDataTs: number[];
  /** Analog out data int (maximum 12bit/ch) */
  analogOutData: number[];
  /** Device status word */
  deviceStatus: number;
  /** Power status */
  pwrStatus: number;
  /** Battery charge percent */
  battStatus: number;
  /** Board temperature in deg C */
  tempStatus: number;
  /** Frequency of the timestamp counter */
  timestampFreq: number;
  /** Analog In Information */
  analogInPortNum: number;
  /** Number of analog in ports (private) */
  analogInPortNumPriv: number;
  /** Analog in port type */
  analogInPortType: Uint8Array;
  /** Analog in port referenced single ended (RSE) */
  analogInPortAvRse: Uint8Array;
  /** Analog in port referenced single ended (RSE) */
  analogInPortRse: Uint8Array;
  /** Analog in port enabled list */
  analogInPortEnabled: Uint8Array;
  /** Analog in port voltage range (volts span:RSE 0 to range, NON-RSE -(range/2) to (range/2)) */
  analogInPortAvRange: number[];
  /** Private analog in port voltage range (volts span:RSE 0 to range, NON-RSE -(range/2) to (range/2)) */
  analogInPortAvRangePriv: number[];
  /** Analog in port voltage range (volts span:RSE 0 to range, NON-RSE -(range/2) to (range/2)) */
  analogInPortRange: number[];
  /** Private analog in port voltage range (volts span:RSE 0 to range, NON-RSE -(range/2) to (range/2)) */
  analogInPortRangePriv: number[];
  /** Public analog in (ADC) resolution (bits used to convert from integer value to volts) */
  analogInRes: number;
  /** Private analog in (ADC) resolution (bits used to convert from integer value to volts) */
  analogInResPriv: number;
  /** Analog in port internal scale m value (should be applied to integer value before converting to volts) */
  analogInIntScaleM: number[];
  /** Private analog in port internal scale m value (should be applied to integer value before converting to volts) */
  analogInIntScaleMPriv: number[];
  /** Analog in port calibration m value (should be applied to integer value before converting to volts) */
  analogInCalM: number[];
  /** Analog in port calibration b value (should be applied to integer value before converting to volts) */
  analogInCalB: number[];
  /** Private analog in port calibration m value (should be applied to integer value before converting to volts) */
  analogInCalMPriv: number[];
  /** Private analog in port calibration b value (should be applied to integer value before converting to volts) */
  analogInCalBPriv: number[];
  /** Digital I/O Information */
  digitalPortNum: number;
  /** Digital IP port type */
  digitalPortType: Uint8Array;
  /** Digital IO port direction (bitwise binary representation LSB=ch0) */
  digitalPortDir: Uint8Array;
  /** Analog Out Information */
  analogOutPortNum: number;
  /** Type of analog out port (DAC) */
  analogOutPortType: Uint8Array;
  /** Analog out port (DAC) resolution (bits) */
  analogOutRes: number;
  /** Analog out port available range (volts span: 0 to range) (DAC) */
  analogOutPortAvRange: number[];
  /** Analog out port range (volts span: 0 to range) (DAC) */
  analogOutPortRange: number;
  /** IPv4 Device Information */
  ipAddr: Uint8Array;
  /** Network mask */
  netMask: Uint8Array;
  /** Default gateway */
  gateway: Uint8Array;
  /** Primary DNS */
  primaryDns: Uint8Array;
  /** Secondary DNS */
  secondaryDns: Uint8Array;
  /** Device MAC address */
  macAddr: Uint8Array;
  /** IPv6 Device Information */
  ipAddrV6: Uint8Array;
  /** Subnet prefix length v6 */
  subPreLengthV6: Uint8Array;
  /** Default gateway v6 */
  gatewayV6: Uint8Array;
  /** Primary DNS v6 */
  primaryDnsV6: Uint8Array;
  /** Secondary DNS v6 */
  secondaryDnsV6: Uint8Array;
  /** Device EUI-64 address */
  eui64: Uint8Array;
  /** Device Network Information */
  hostName: string;
  /** Device port */
  devicePort: number;
  /** Device friendly name */
  friendlyDeviceName: string;
  /** Current SSID device is to connect to */
  ssid: string;
  /** Current SSID strength out of 255 */
  ssidStrength: number;
  /** Device WiFi security mode */
  wifiSecurityMode: number;
  /** Current SSID infrastructure mode */
  wifiInfMode: number;
  /** Aviable Network Information */
  avSsid: string[];
  /** Available SSID strength out of 255 */
  avSsidStrength: number[];
  /** Available WiFi network security mode */
  avWifiSecurityMode: number[];
  /** Available WiFi network infrastructure mode */
  avWifiInfMode: number[];
  /** Device Hardware/Firmware Information */
  devicePn: string;
  /** Device hardware revision */
  deviceHwRev: string;
  /** Device firmware revision */
  deviceFwRev: string;
  /** Device serial number */
  deviceSn: Long;
}

function createBaseDaqifiOutMessage(): DaqifiOutMessage {
  return {
    msgTimeStamp: 0,
    analogInData: [],
    analogInDataFloat: [],
    analogInDataTs: [],
    digitalData: new Uint8Array(),
    digitalDataTs: [],
    analogOutData: [],
    deviceStatus: 0,
    pwrStatus: 0,
    battStatus: 0,
    tempStatus: 0,
    timestampFreq: 0,
    analogInPortNum: 0,
    analogInPortNumPriv: 0,
    analogInPortType: new Uint8Array(),
    analogInPortAvRse: new Uint8Array(),
    analogInPortRse: new Uint8Array(),
    analogInPortEnabled: new Uint8Array(),
    analogInPortAvRange: [],
    analogInPortAvRangePriv: [],
    analogInPortRange: [],
    analogInPortRangePriv: [],
    analogInRes: 0,
    analogInResPriv: 0,
    analogInIntScaleM: [],
    analogInIntScaleMPriv: [],
    analogInCalM: [],
    analogInCalB: [],
    analogInCalMPriv: [],
    analogInCalBPriv: [],
    digitalPortNum: 0,
    digitalPortType: new Uint8Array(),
    digitalPortDir: new Uint8Array(),
    analogOutPortNum: 0,
    analogOutPortType: new Uint8Array(),
    analogOutRes: 0,
    analogOutPortAvRange: [],
    analogOutPortRange: 0,
    ipAddr: new Uint8Array(),
    netMask: new Uint8Array(),
    gateway: new Uint8Array(),
    primaryDns: new Uint8Array(),
    secondaryDns: new Uint8Array(),
    macAddr: new Uint8Array(),
    ipAddrV6: new Uint8Array(),
    subPreLengthV6: new Uint8Array(),
    gatewayV6: new Uint8Array(),
    primaryDnsV6: new Uint8Array(),
    secondaryDnsV6: new Uint8Array(),
    eui64: new Uint8Array(),
    hostName: "",
    devicePort: 0,
    friendlyDeviceName: "",
    ssid: "",
    ssidStrength: 0,
    wifiSecurityMode: 0,
    wifiInfMode: 0,
    avSsid: [],
    avSsidStrength: [],
    avWifiSecurityMode: [],
    avWifiInfMode: [],
    devicePn: "",
    deviceHwRev: "",
    deviceFwRev: "",
    deviceSn: Long.UZERO,
  };
}

export const DaqifiOutMessage = {
  encode(
    message: DaqifiOutMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgTimeStamp !== 0) {
      writer.uint32(8).uint32(message.msgTimeStamp);
    }
    writer.uint32(18).fork();
    for (const v of message.analogInData) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.analogInDataFloat) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.analogInDataTs) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.digitalData.length !== 0) {
      writer.uint32(42).bytes(message.digitalData);
    }
    writer.uint32(50).fork();
    for (const v of message.digitalDataTs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.analogOutData) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.deviceStatus !== 0) {
      writer.uint32(64).uint32(message.deviceStatus);
    }
    if (message.pwrStatus !== 0) {
      writer.uint32(72).uint32(message.pwrStatus);
    }
    if (message.battStatus !== 0) {
      writer.uint32(80).uint32(message.battStatus);
    }
    if (message.tempStatus !== 0) {
      writer.uint32(88).sint32(message.tempStatus);
    }
    if (message.timestampFreq !== 0) {
      writer.uint32(128).uint32(message.timestampFreq);
    }
    if (message.analogInPortNum !== 0) {
      writer.uint32(136).uint32(message.analogInPortNum);
    }
    if (message.analogInPortNumPriv !== 0) {
      writer.uint32(144).uint32(message.analogInPortNumPriv);
    }
    if (message.analogInPortType.length !== 0) {
      writer.uint32(154).bytes(message.analogInPortType);
    }
    if (message.analogInPortAvRse.length !== 0) {
      writer.uint32(162).bytes(message.analogInPortAvRse);
    }
    if (message.analogInPortRse.length !== 0) {
      writer.uint32(170).bytes(message.analogInPortRse);
    }
    if (message.analogInPortEnabled.length !== 0) {
      writer.uint32(178).bytes(message.analogInPortEnabled);
    }
    writer.uint32(186).fork();
    for (const v of message.analogInPortAvRange) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(194).fork();
    for (const v of message.analogInPortAvRangePriv) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(202).fork();
    for (const v of message.analogInPortRange) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(210).fork();
    for (const v of message.analogInPortRangePriv) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.analogInRes !== 0) {
      writer.uint32(216).uint32(message.analogInRes);
    }
    if (message.analogInResPriv !== 0) {
      writer.uint32(224).uint32(message.analogInResPriv);
    }
    writer.uint32(234).fork();
    for (const v of message.analogInIntScaleM) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(242).fork();
    for (const v of message.analogInIntScaleMPriv) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(250).fork();
    for (const v of message.analogInCalM) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(258).fork();
    for (const v of message.analogInCalB) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(266).fork();
    for (const v of message.analogInCalMPriv) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(274).fork();
    for (const v of message.analogInCalBPriv) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.digitalPortNum !== 0) {
      writer.uint32(280).uint32(message.digitalPortNum);
    }
    if (message.digitalPortType.length !== 0) {
      writer.uint32(290).bytes(message.digitalPortType);
    }
    if (message.digitalPortDir.length !== 0) {
      writer.uint32(298).bytes(message.digitalPortDir);
    }
    if (message.analogOutPortNum !== 0) {
      writer.uint32(304).uint32(message.analogOutPortNum);
    }
    if (message.analogOutPortType.length !== 0) {
      writer.uint32(314).bytes(message.analogOutPortType);
    }
    if (message.analogOutRes !== 0) {
      writer.uint32(320).uint32(message.analogOutRes);
    }
    writer.uint32(330).fork();
    for (const v of message.analogOutPortAvRange) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.analogOutPortRange !== 0) {
      writer.uint32(341).float(message.analogOutPortRange);
    }
    if (message.ipAddr.length !== 0) {
      writer.uint32(346).bytes(message.ipAddr);
    }
    if (message.netMask.length !== 0) {
      writer.uint32(354).bytes(message.netMask);
    }
    if (message.gateway.length !== 0) {
      writer.uint32(362).bytes(message.gateway);
    }
    if (message.primaryDns.length !== 0) {
      writer.uint32(370).bytes(message.primaryDns);
    }
    if (message.secondaryDns.length !== 0) {
      writer.uint32(378).bytes(message.secondaryDns);
    }
    if (message.macAddr.length !== 0) {
      writer.uint32(386).bytes(message.macAddr);
    }
    if (message.ipAddrV6.length !== 0) {
      writer.uint32(394).bytes(message.ipAddrV6);
    }
    if (message.subPreLengthV6.length !== 0) {
      writer.uint32(402).bytes(message.subPreLengthV6);
    }
    if (message.gatewayV6.length !== 0) {
      writer.uint32(410).bytes(message.gatewayV6);
    }
    if (message.primaryDnsV6.length !== 0) {
      writer.uint32(418).bytes(message.primaryDnsV6);
    }
    if (message.secondaryDnsV6.length !== 0) {
      writer.uint32(426).bytes(message.secondaryDnsV6);
    }
    if (message.eui64.length !== 0) {
      writer.uint32(434).bytes(message.eui64);
    }
    if (message.hostName !== "") {
      writer.uint32(442).string(message.hostName);
    }
    if (message.devicePort !== 0) {
      writer.uint32(448).uint32(message.devicePort);
    }
    if (message.friendlyDeviceName !== "") {
      writer.uint32(458).string(message.friendlyDeviceName);
    }
    if (message.ssid !== "") {
      writer.uint32(466).string(message.ssid);
    }
    if (message.ssidStrength !== 0) {
      writer.uint32(472).uint32(message.ssidStrength);
    }
    if (message.wifiSecurityMode !== 0) {
      writer.uint32(480).uint32(message.wifiSecurityMode);
    }
    if (message.wifiInfMode !== 0) {
      writer.uint32(488).uint32(message.wifiInfMode);
    }
    for (const v of message.avSsid) {
      writer.uint32(498).string(v!);
    }
    writer.uint32(506).fork();
    for (const v of message.avSsidStrength) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(514).fork();
    for (const v of message.avWifiSecurityMode) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(522).fork();
    for (const v of message.avWifiInfMode) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.devicePn !== "") {
      writer.uint32(530).string(message.devicePn);
    }
    if (message.deviceHwRev !== "") {
      writer.uint32(538).string(message.deviceHwRev);
    }
    if (message.deviceFwRev !== "") {
      writer.uint32(546).string(message.deviceFwRev);
    }
    if (!message.deviceSn.isZero()) {
      writer.uint32(552).uint64(message.deviceSn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DaqifiOutMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDaqifiOutMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTimeStamp = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInData.push(reader.sint32());
            }
          } else {
            message.analogInData.push(reader.sint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInDataFloat.push(reader.float());
            }
          } else {
            message.analogInDataFloat.push(reader.float());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInDataTs.push(reader.uint32());
            }
          } else {
            message.analogInDataTs.push(reader.uint32());
          }
          break;
        case 5:
          message.digitalData = reader.bytes();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.digitalDataTs.push(reader.uint32());
            }
          } else {
            message.digitalDataTs.push(reader.uint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogOutData.push(reader.uint32());
            }
          } else {
            message.analogOutData.push(reader.uint32());
          }
          break;
        case 8:
          message.deviceStatus = reader.uint32();
          break;
        case 9:
          message.pwrStatus = reader.uint32();
          break;
        case 10:
          message.battStatus = reader.uint32();
          break;
        case 11:
          message.tempStatus = reader.sint32();
          break;
        case 16:
          message.timestampFreq = reader.uint32();
          break;
        case 17:
          message.analogInPortNum = reader.uint32();
          break;
        case 18:
          message.analogInPortNumPriv = reader.uint32();
          break;
        case 19:
          message.analogInPortType = reader.bytes();
          break;
        case 20:
          message.analogInPortAvRse = reader.bytes();
          break;
        case 21:
          message.analogInPortRse = reader.bytes();
          break;
        case 22:
          message.analogInPortEnabled = reader.bytes();
          break;
        case 23:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInPortAvRange.push(reader.float());
            }
          } else {
            message.analogInPortAvRange.push(reader.float());
          }
          break;
        case 24:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInPortAvRangePriv.push(reader.float());
            }
          } else {
            message.analogInPortAvRangePriv.push(reader.float());
          }
          break;
        case 25:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInPortRange.push(reader.float());
            }
          } else {
            message.analogInPortRange.push(reader.float());
          }
          break;
        case 26:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInPortRangePriv.push(reader.float());
            }
          } else {
            message.analogInPortRangePriv.push(reader.float());
          }
          break;
        case 27:
          message.analogInRes = reader.uint32();
          break;
        case 28:
          message.analogInResPriv = reader.uint32();
          break;
        case 29:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInIntScaleM.push(reader.float());
            }
          } else {
            message.analogInIntScaleM.push(reader.float());
          }
          break;
        case 30:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInIntScaleMPriv.push(reader.float());
            }
          } else {
            message.analogInIntScaleMPriv.push(reader.float());
          }
          break;
        case 31:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInCalM.push(reader.float());
            }
          } else {
            message.analogInCalM.push(reader.float());
          }
          break;
        case 32:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInCalB.push(reader.float());
            }
          } else {
            message.analogInCalB.push(reader.float());
          }
          break;
        case 33:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInCalMPriv.push(reader.float());
            }
          } else {
            message.analogInCalMPriv.push(reader.float());
          }
          break;
        case 34:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogInCalBPriv.push(reader.float());
            }
          } else {
            message.analogInCalBPriv.push(reader.float());
          }
          break;
        case 35:
          message.digitalPortNum = reader.uint32();
          break;
        case 36:
          message.digitalPortType = reader.bytes();
          break;
        case 37:
          message.digitalPortDir = reader.bytes();
          break;
        case 38:
          message.analogOutPortNum = reader.uint32();
          break;
        case 39:
          message.analogOutPortType = reader.bytes();
          break;
        case 40:
          message.analogOutRes = reader.uint32();
          break;
        case 41:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.analogOutPortAvRange.push(reader.float());
            }
          } else {
            message.analogOutPortAvRange.push(reader.float());
          }
          break;
        case 42:
          message.analogOutPortRange = reader.float();
          break;
        case 43:
          message.ipAddr = reader.bytes();
          break;
        case 44:
          message.netMask = reader.bytes();
          break;
        case 45:
          message.gateway = reader.bytes();
          break;
        case 46:
          message.primaryDns = reader.bytes();
          break;
        case 47:
          message.secondaryDns = reader.bytes();
          break;
        case 48:
          message.macAddr = reader.bytes();
          break;
        case 49:
          message.ipAddrV6 = reader.bytes();
          break;
        case 50:
          message.subPreLengthV6 = reader.bytes();
          break;
        case 51:
          message.gatewayV6 = reader.bytes();
          break;
        case 52:
          message.primaryDnsV6 = reader.bytes();
          break;
        case 53:
          message.secondaryDnsV6 = reader.bytes();
          break;
        case 54:
          message.eui64 = reader.bytes();
          break;
        case 55:
          message.hostName = reader.string();
          break;
        case 56:
          message.devicePort = reader.uint32();
          break;
        case 57:
          message.friendlyDeviceName = reader.string();
          break;
        case 58:
          message.ssid = reader.string();
          break;
        case 59:
          message.ssidStrength = reader.uint32();
          break;
        case 60:
          message.wifiSecurityMode = reader.uint32();
          break;
        case 61:
          message.wifiInfMode = reader.uint32();
          break;
        case 62:
          message.avSsid.push(reader.string());
          break;
        case 63:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.avSsidStrength.push(reader.uint32());
            }
          } else {
            message.avSsidStrength.push(reader.uint32());
          }
          break;
        case 64:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.avWifiSecurityMode.push(reader.uint32());
            }
          } else {
            message.avWifiSecurityMode.push(reader.uint32());
          }
          break;
        case 65:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.avWifiInfMode.push(reader.uint32());
            }
          } else {
            message.avWifiInfMode.push(reader.uint32());
          }
          break;
        case 66:
          message.devicePn = reader.string();
          break;
        case 67:
          message.deviceHwRev = reader.string();
          break;
        case 68:
          message.deviceFwRev = reader.string();
          break;
        case 69:
          message.deviceSn = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DaqifiOutMessage {
    return {
      msgTimeStamp: isSet(object.msgTimeStamp)
        ? Number(object.msgTimeStamp)
        : 0,
      analogInData: Array.isArray(object?.analogInData)
        ? object.analogInData.map((e: any) => Number(e))
        : [],
      analogInDataFloat: Array.isArray(object?.analogInDataFloat)
        ? object.analogInDataFloat.map((e: any) => Number(e))
        : [],
      analogInDataTs: Array.isArray(object?.analogInDataTs)
        ? object.analogInDataTs.map((e: any) => Number(e))
        : [],
      digitalData: isSet(object.digitalData)
        ? bytesFromBase64(object.digitalData)
        : new Uint8Array(),
      digitalDataTs: Array.isArray(object?.digitalDataTs)
        ? object.digitalDataTs.map((e: any) => Number(e))
        : [],
      analogOutData: Array.isArray(object?.analogOutData)
        ? object.analogOutData.map((e: any) => Number(e))
        : [],
      deviceStatus: isSet(object.deviceStatus)
        ? Number(object.deviceStatus)
        : 0,
      pwrStatus: isSet(object.pwrStatus) ? Number(object.pwrStatus) : 0,
      battStatus: isSet(object.battStatus) ? Number(object.battStatus) : 0,
      tempStatus: isSet(object.tempStatus) ? Number(object.tempStatus) : 0,
      timestampFreq: isSet(object.timestampFreq)
        ? Number(object.timestampFreq)
        : 0,
      analogInPortNum: isSet(object.analogInPortNum)
        ? Number(object.analogInPortNum)
        : 0,
      analogInPortNumPriv: isSet(object.analogInPortNumPriv)
        ? Number(object.analogInPortNumPriv)
        : 0,
      analogInPortType: isSet(object.analogInPortType)
        ? bytesFromBase64(object.analogInPortType)
        : new Uint8Array(),
      analogInPortAvRse: isSet(object.analogInPortAvRse)
        ? bytesFromBase64(object.analogInPortAvRse)
        : new Uint8Array(),
      analogInPortRse: isSet(object.analogInPortRse)
        ? bytesFromBase64(object.analogInPortRse)
        : new Uint8Array(),
      analogInPortEnabled: isSet(object.analogInPortEnabled)
        ? bytesFromBase64(object.analogInPortEnabled)
        : new Uint8Array(),
      analogInPortAvRange: Array.isArray(object?.analogInPortAvRange)
        ? object.analogInPortAvRange.map((e: any) => Number(e))
        : [],
      analogInPortAvRangePriv: Array.isArray(object?.analogInPortAvRangePriv)
        ? object.analogInPortAvRangePriv.map((e: any) => Number(e))
        : [],
      analogInPortRange: Array.isArray(object?.analogInPortRange)
        ? object.analogInPortRange.map((e: any) => Number(e))
        : [],
      analogInPortRangePriv: Array.isArray(object?.analogInPortRangePriv)
        ? object.analogInPortRangePriv.map((e: any) => Number(e))
        : [],
      analogInRes: isSet(object.analogInRes) ? Number(object.analogInRes) : 0,
      analogInResPriv: isSet(object.analogInResPriv)
        ? Number(object.analogInResPriv)
        : 0,
      analogInIntScaleM: Array.isArray(object?.analogInIntScaleM)
        ? object.analogInIntScaleM.map((e: any) => Number(e))
        : [],
      analogInIntScaleMPriv: Array.isArray(object?.analogInIntScaleMPriv)
        ? object.analogInIntScaleMPriv.map((e: any) => Number(e))
        : [],
      analogInCalM: Array.isArray(object?.analogInCalM)
        ? object.analogInCalM.map((e: any) => Number(e))
        : [],
      analogInCalB: Array.isArray(object?.analogInCalB)
        ? object.analogInCalB.map((e: any) => Number(e))
        : [],
      analogInCalMPriv: Array.isArray(object?.analogInCalMPriv)
        ? object.analogInCalMPriv.map((e: any) => Number(e))
        : [],
      analogInCalBPriv: Array.isArray(object?.analogInCalBPriv)
        ? object.analogInCalBPriv.map((e: any) => Number(e))
        : [],
      digitalPortNum: isSet(object.digitalPortNum)
        ? Number(object.digitalPortNum)
        : 0,
      digitalPortType: isSet(object.digitalPortType)
        ? bytesFromBase64(object.digitalPortType)
        : new Uint8Array(),
      digitalPortDir: isSet(object.digitalPortDir)
        ? bytesFromBase64(object.digitalPortDir)
        : new Uint8Array(),
      analogOutPortNum: isSet(object.analogOutPortNum)
        ? Number(object.analogOutPortNum)
        : 0,
      analogOutPortType: isSet(object.analogOutPortType)
        ? bytesFromBase64(object.analogOutPortType)
        : new Uint8Array(),
      analogOutRes: isSet(object.analogOutRes)
        ? Number(object.analogOutRes)
        : 0,
      analogOutPortAvRange: Array.isArray(object?.analogOutPortAvRange)
        ? object.analogOutPortAvRange.map((e: any) => Number(e))
        : [],
      analogOutPortRange: isSet(object.analogOutPortRange)
        ? Number(object.analogOutPortRange)
        : 0,
      ipAddr: isSet(object.ipAddr)
        ? bytesFromBase64(object.ipAddr)
        : new Uint8Array(),
      netMask: isSet(object.netMask)
        ? bytesFromBase64(object.netMask)
        : new Uint8Array(),
      gateway: isSet(object.gateway)
        ? bytesFromBase64(object.gateway)
        : new Uint8Array(),
      primaryDns: isSet(object.primaryDns)
        ? bytesFromBase64(object.primaryDns)
        : new Uint8Array(),
      secondaryDns: isSet(object.secondaryDns)
        ? bytesFromBase64(object.secondaryDns)
        : new Uint8Array(),
      macAddr: isSet(object.macAddr)
        ? bytesFromBase64(object.macAddr)
        : new Uint8Array(),
      ipAddrV6: isSet(object.ipAddrV6)
        ? bytesFromBase64(object.ipAddrV6)
        : new Uint8Array(),
      subPreLengthV6: isSet(object.subPreLengthV6)
        ? bytesFromBase64(object.subPreLengthV6)
        : new Uint8Array(),
      gatewayV6: isSet(object.gatewayV6)
        ? bytesFromBase64(object.gatewayV6)
        : new Uint8Array(),
      primaryDnsV6: isSet(object.primaryDnsV6)
        ? bytesFromBase64(object.primaryDnsV6)
        : new Uint8Array(),
      secondaryDnsV6: isSet(object.secondaryDnsV6)
        ? bytesFromBase64(object.secondaryDnsV6)
        : new Uint8Array(),
      eui64: isSet(object.eui64)
        ? bytesFromBase64(object.eui64)
        : new Uint8Array(),
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      devicePort: isSet(object.devicePort) ? Number(object.devicePort) : 0,
      friendlyDeviceName: isSet(object.friendlyDeviceName)
        ? String(object.friendlyDeviceName)
        : "",
      ssid: isSet(object.ssid) ? String(object.ssid) : "",
      ssidStrength: isSet(object.ssidStrength)
        ? Number(object.ssidStrength)
        : 0,
      wifiSecurityMode: isSet(object.wifiSecurityMode)
        ? Number(object.wifiSecurityMode)
        : 0,
      wifiInfMode: isSet(object.wifiInfMode) ? Number(object.wifiInfMode) : 0,
      avSsid: Array.isArray(object?.avSsid)
        ? object.avSsid.map((e: any) => String(e))
        : [],
      avSsidStrength: Array.isArray(object?.avSsidStrength)
        ? object.avSsidStrength.map((e: any) => Number(e))
        : [],
      avWifiSecurityMode: Array.isArray(object?.avWifiSecurityMode)
        ? object.avWifiSecurityMode.map((e: any) => Number(e))
        : [],
      avWifiInfMode: Array.isArray(object?.avWifiInfMode)
        ? object.avWifiInfMode.map((e: any) => Number(e))
        : [],
      devicePn: isSet(object.devicePn) ? String(object.devicePn) : "",
      deviceHwRev: isSet(object.deviceHwRev) ? String(object.deviceHwRev) : "",
      deviceFwRev: isSet(object.deviceFwRev) ? String(object.deviceFwRev) : "",
      deviceSn: isSet(object.deviceSn)
        ? Long.fromValue(object.deviceSn)
        : Long.UZERO,
    };
  },

  toJSON(message: DaqifiOutMessage): unknown {
    const obj: any = {};
    message.msgTimeStamp !== undefined &&
      (obj.msgTimeStamp = Math.round(message.msgTimeStamp));
    if (message.analogInData) {
      obj.analogInData = message.analogInData.map((e) => Math.round(e));
    } else {
      obj.analogInData = [];
    }
    if (message.analogInDataFloat) {
      obj.analogInDataFloat = message.analogInDataFloat.map((e) => e);
    } else {
      obj.analogInDataFloat = [];
    }
    if (message.analogInDataTs) {
      obj.analogInDataTs = message.analogInDataTs.map((e) => Math.round(e));
    } else {
      obj.analogInDataTs = [];
    }
    message.digitalData !== undefined &&
      (obj.digitalData = base64FromBytes(
        message.digitalData !== undefined
          ? message.digitalData
          : new Uint8Array()
      ));
    if (message.digitalDataTs) {
      obj.digitalDataTs = message.digitalDataTs.map((e) => Math.round(e));
    } else {
      obj.digitalDataTs = [];
    }
    if (message.analogOutData) {
      obj.analogOutData = message.analogOutData.map((e) => Math.round(e));
    } else {
      obj.analogOutData = [];
    }
    message.deviceStatus !== undefined &&
      (obj.deviceStatus = Math.round(message.deviceStatus));
    message.pwrStatus !== undefined &&
      (obj.pwrStatus = Math.round(message.pwrStatus));
    message.battStatus !== undefined &&
      (obj.battStatus = Math.round(message.battStatus));
    message.tempStatus !== undefined &&
      (obj.tempStatus = Math.round(message.tempStatus));
    message.timestampFreq !== undefined &&
      (obj.timestampFreq = Math.round(message.timestampFreq));
    message.analogInPortNum !== undefined &&
      (obj.analogInPortNum = Math.round(message.analogInPortNum));
    message.analogInPortNumPriv !== undefined &&
      (obj.analogInPortNumPriv = Math.round(message.analogInPortNumPriv));
    message.analogInPortType !== undefined &&
      (obj.analogInPortType = base64FromBytes(
        message.analogInPortType !== undefined
          ? message.analogInPortType
          : new Uint8Array()
      ));
    message.analogInPortAvRse !== undefined &&
      (obj.analogInPortAvRse = base64FromBytes(
        message.analogInPortAvRse !== undefined
          ? message.analogInPortAvRse
          : new Uint8Array()
      ));
    message.analogInPortRse !== undefined &&
      (obj.analogInPortRse = base64FromBytes(
        message.analogInPortRse !== undefined
          ? message.analogInPortRse
          : new Uint8Array()
      ));
    message.analogInPortEnabled !== undefined &&
      (obj.analogInPortEnabled = base64FromBytes(
        message.analogInPortEnabled !== undefined
          ? message.analogInPortEnabled
          : new Uint8Array()
      ));
    if (message.analogInPortAvRange) {
      obj.analogInPortAvRange = message.analogInPortAvRange.map((e) => e);
    } else {
      obj.analogInPortAvRange = [];
    }
    if (message.analogInPortAvRangePriv) {
      obj.analogInPortAvRangePriv = message.analogInPortAvRangePriv.map(
        (e) => e
      );
    } else {
      obj.analogInPortAvRangePriv = [];
    }
    if (message.analogInPortRange) {
      obj.analogInPortRange = message.analogInPortRange.map((e) => e);
    } else {
      obj.analogInPortRange = [];
    }
    if (message.analogInPortRangePriv) {
      obj.analogInPortRangePriv = message.analogInPortRangePriv.map((e) => e);
    } else {
      obj.analogInPortRangePriv = [];
    }
    message.analogInRes !== undefined &&
      (obj.analogInRes = Math.round(message.analogInRes));
    message.analogInResPriv !== undefined &&
      (obj.analogInResPriv = Math.round(message.analogInResPriv));
    if (message.analogInIntScaleM) {
      obj.analogInIntScaleM = message.analogInIntScaleM.map((e) => e);
    } else {
      obj.analogInIntScaleM = [];
    }
    if (message.analogInIntScaleMPriv) {
      obj.analogInIntScaleMPriv = message.analogInIntScaleMPriv.map((e) => e);
    } else {
      obj.analogInIntScaleMPriv = [];
    }
    if (message.analogInCalM) {
      obj.analogInCalM = message.analogInCalM.map((e) => e);
    } else {
      obj.analogInCalM = [];
    }
    if (message.analogInCalB) {
      obj.analogInCalB = message.analogInCalB.map((e) => e);
    } else {
      obj.analogInCalB = [];
    }
    if (message.analogInCalMPriv) {
      obj.analogInCalMPriv = message.analogInCalMPriv.map((e) => e);
    } else {
      obj.analogInCalMPriv = [];
    }
    if (message.analogInCalBPriv) {
      obj.analogInCalBPriv = message.analogInCalBPriv.map((e) => e);
    } else {
      obj.analogInCalBPriv = [];
    }
    message.digitalPortNum !== undefined &&
      (obj.digitalPortNum = Math.round(message.digitalPortNum));
    message.digitalPortType !== undefined &&
      (obj.digitalPortType = base64FromBytes(
        message.digitalPortType !== undefined
          ? message.digitalPortType
          : new Uint8Array()
      ));
    message.digitalPortDir !== undefined &&
      (obj.digitalPortDir = base64FromBytes(
        message.digitalPortDir !== undefined
          ? message.digitalPortDir
          : new Uint8Array()
      ));
    message.analogOutPortNum !== undefined &&
      (obj.analogOutPortNum = Math.round(message.analogOutPortNum));
    message.analogOutPortType !== undefined &&
      (obj.analogOutPortType = base64FromBytes(
        message.analogOutPortType !== undefined
          ? message.analogOutPortType
          : new Uint8Array()
      ));
    message.analogOutRes !== undefined &&
      (obj.analogOutRes = Math.round(message.analogOutRes));
    if (message.analogOutPortAvRange) {
      obj.analogOutPortAvRange = message.analogOutPortAvRange.map((e) => e);
    } else {
      obj.analogOutPortAvRange = [];
    }
    message.analogOutPortRange !== undefined &&
      (obj.analogOutPortRange = message.analogOutPortRange);
    message.ipAddr !== undefined &&
      (obj.ipAddr = base64FromBytes(
        message.ipAddr !== undefined ? message.ipAddr : new Uint8Array()
      ));
    message.netMask !== undefined &&
      (obj.netMask = base64FromBytes(
        message.netMask !== undefined ? message.netMask : new Uint8Array()
      ));
    message.gateway !== undefined &&
      (obj.gateway = base64FromBytes(
        message.gateway !== undefined ? message.gateway : new Uint8Array()
      ));
    message.primaryDns !== undefined &&
      (obj.primaryDns = base64FromBytes(
        message.primaryDns !== undefined ? message.primaryDns : new Uint8Array()
      ));
    message.secondaryDns !== undefined &&
      (obj.secondaryDns = base64FromBytes(
        message.secondaryDns !== undefined
          ? message.secondaryDns
          : new Uint8Array()
      ));
    message.macAddr !== undefined &&
      (obj.macAddr = base64FromBytes(
        message.macAddr !== undefined ? message.macAddr : new Uint8Array()
      ));
    message.ipAddrV6 !== undefined &&
      (obj.ipAddrV6 = base64FromBytes(
        message.ipAddrV6 !== undefined ? message.ipAddrV6 : new Uint8Array()
      ));
    message.subPreLengthV6 !== undefined &&
      (obj.subPreLengthV6 = base64FromBytes(
        message.subPreLengthV6 !== undefined
          ? message.subPreLengthV6
          : new Uint8Array()
      ));
    message.gatewayV6 !== undefined &&
      (obj.gatewayV6 = base64FromBytes(
        message.gatewayV6 !== undefined ? message.gatewayV6 : new Uint8Array()
      ));
    message.primaryDnsV6 !== undefined &&
      (obj.primaryDnsV6 = base64FromBytes(
        message.primaryDnsV6 !== undefined
          ? message.primaryDnsV6
          : new Uint8Array()
      ));
    message.secondaryDnsV6 !== undefined &&
      (obj.secondaryDnsV6 = base64FromBytes(
        message.secondaryDnsV6 !== undefined
          ? message.secondaryDnsV6
          : new Uint8Array()
      ));
    message.eui64 !== undefined &&
      (obj.eui64 = base64FromBytes(
        message.eui64 !== undefined ? message.eui64 : new Uint8Array()
      ));
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.devicePort !== undefined &&
      (obj.devicePort = Math.round(message.devicePort));
    message.friendlyDeviceName !== undefined &&
      (obj.friendlyDeviceName = message.friendlyDeviceName);
    message.ssid !== undefined && (obj.ssid = message.ssid);
    message.ssidStrength !== undefined &&
      (obj.ssidStrength = Math.round(message.ssidStrength));
    message.wifiSecurityMode !== undefined &&
      (obj.wifiSecurityMode = Math.round(message.wifiSecurityMode));
    message.wifiInfMode !== undefined &&
      (obj.wifiInfMode = Math.round(message.wifiInfMode));
    if (message.avSsid) {
      obj.avSsid = message.avSsid.map((e) => e);
    } else {
      obj.avSsid = [];
    }
    if (message.avSsidStrength) {
      obj.avSsidStrength = message.avSsidStrength.map((e) => Math.round(e));
    } else {
      obj.avSsidStrength = [];
    }
    if (message.avWifiSecurityMode) {
      obj.avWifiSecurityMode = message.avWifiSecurityMode.map((e) =>
        Math.round(e)
      );
    } else {
      obj.avWifiSecurityMode = [];
    }
    if (message.avWifiInfMode) {
      obj.avWifiInfMode = message.avWifiInfMode.map((e) => Math.round(e));
    } else {
      obj.avWifiInfMode = [];
    }
    message.devicePn !== undefined && (obj.devicePn = message.devicePn);
    message.deviceHwRev !== undefined &&
      (obj.deviceHwRev = message.deviceHwRev);
    message.deviceFwRev !== undefined &&
      (obj.deviceFwRev = message.deviceFwRev);
    message.deviceSn !== undefined &&
      (obj.deviceSn = (message.deviceSn || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DaqifiOutMessage>, I>>(
    object: I
  ): DaqifiOutMessage {
    const message = createBaseDaqifiOutMessage();
    message.msgTimeStamp = object.msgTimeStamp ?? 0;
    message.analogInData = object.analogInData?.map((e) => e) || [];
    message.analogInDataFloat = object.analogInDataFloat?.map((e) => e) || [];
    message.analogInDataTs = object.analogInDataTs?.map((e) => e) || [];
    message.digitalData = object.digitalData ?? new Uint8Array();
    message.digitalDataTs = object.digitalDataTs?.map((e) => e) || [];
    message.analogOutData = object.analogOutData?.map((e) => e) || [];
    message.deviceStatus = object.deviceStatus ?? 0;
    message.pwrStatus = object.pwrStatus ?? 0;
    message.battStatus = object.battStatus ?? 0;
    message.tempStatus = object.tempStatus ?? 0;
    message.timestampFreq = object.timestampFreq ?? 0;
    message.analogInPortNum = object.analogInPortNum ?? 0;
    message.analogInPortNumPriv = object.analogInPortNumPriv ?? 0;
    message.analogInPortType = object.analogInPortType ?? new Uint8Array();
    message.analogInPortAvRse = object.analogInPortAvRse ?? new Uint8Array();
    message.analogInPortRse = object.analogInPortRse ?? new Uint8Array();
    message.analogInPortEnabled =
      object.analogInPortEnabled ?? new Uint8Array();
    message.analogInPortAvRange =
      object.analogInPortAvRange?.map((e) => e) || [];
    message.analogInPortAvRangePriv =
      object.analogInPortAvRangePriv?.map((e) => e) || [];
    message.analogInPortRange = object.analogInPortRange?.map((e) => e) || [];
    message.analogInPortRangePriv =
      object.analogInPortRangePriv?.map((e) => e) || [];
    message.analogInRes = object.analogInRes ?? 0;
    message.analogInResPriv = object.analogInResPriv ?? 0;
    message.analogInIntScaleM = object.analogInIntScaleM?.map((e) => e) || [];
    message.analogInIntScaleMPriv =
      object.analogInIntScaleMPriv?.map((e) => e) || [];
    message.analogInCalM = object.analogInCalM?.map((e) => e) || [];
    message.analogInCalB = object.analogInCalB?.map((e) => e) || [];
    message.analogInCalMPriv = object.analogInCalMPriv?.map((e) => e) || [];
    message.analogInCalBPriv = object.analogInCalBPriv?.map((e) => e) || [];
    message.digitalPortNum = object.digitalPortNum ?? 0;
    message.digitalPortType = object.digitalPortType ?? new Uint8Array();
    message.digitalPortDir = object.digitalPortDir ?? new Uint8Array();
    message.analogOutPortNum = object.analogOutPortNum ?? 0;
    message.analogOutPortType = object.analogOutPortType ?? new Uint8Array();
    message.analogOutRes = object.analogOutRes ?? 0;
    message.analogOutPortAvRange =
      object.analogOutPortAvRange?.map((e) => e) || [];
    message.analogOutPortRange = object.analogOutPortRange ?? 0;
    message.ipAddr = object.ipAddr ?? new Uint8Array();
    message.netMask = object.netMask ?? new Uint8Array();
    message.gateway = object.gateway ?? new Uint8Array();
    message.primaryDns = object.primaryDns ?? new Uint8Array();
    message.secondaryDns = object.secondaryDns ?? new Uint8Array();
    message.macAddr = object.macAddr ?? new Uint8Array();
    message.ipAddrV6 = object.ipAddrV6 ?? new Uint8Array();
    message.subPreLengthV6 = object.subPreLengthV6 ?? new Uint8Array();
    message.gatewayV6 = object.gatewayV6 ?? new Uint8Array();
    message.primaryDnsV6 = object.primaryDnsV6 ?? new Uint8Array();
    message.secondaryDnsV6 = object.secondaryDnsV6 ?? new Uint8Array();
    message.eui64 = object.eui64 ?? new Uint8Array();
    message.hostName = object.hostName ?? "";
    message.devicePort = object.devicePort ?? 0;
    message.friendlyDeviceName = object.friendlyDeviceName ?? "";
    message.ssid = object.ssid ?? "";
    message.ssidStrength = object.ssidStrength ?? 0;
    message.wifiSecurityMode = object.wifiSecurityMode ?? 0;
    message.wifiInfMode = object.wifiInfMode ?? 0;
    message.avSsid = object.avSsid?.map((e) => e) || [];
    message.avSsidStrength = object.avSsidStrength?.map((e) => e) || [];
    message.avWifiSecurityMode = object.avWifiSecurityMode?.map((e) => e) || [];
    message.avWifiInfMode = object.avWifiInfMode?.map((e) => e) || [];
    message.devicePn = object.devicePn ?? "";
    message.deviceHwRev = object.deviceHwRev ?? "";
    message.deviceFwRev = object.deviceFwRev ?? "";
    message.deviceSn =
      object.deviceSn !== undefined && object.deviceSn !== null
        ? Long.fromValue(object.deviceSn)
        : Long.UZERO;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
