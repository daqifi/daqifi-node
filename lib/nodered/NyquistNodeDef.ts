import * as nodered from "node-red";

export interface NyquistNodeDef
    extends nodered.NodeDef {
    hostOrIp: string;
    port?: number;
    enableAnalogIn?: boolean[];
    sampleRate: number;
    analogCh1?: boolean;
    analogCh2?: boolean;
    analogCh3?: boolean;
    analogCh4?: boolean;
    analogCh5?: boolean;
    analogCh6?: boolean;
    analogCh7?: boolean;
    analogCh8?: boolean;
}