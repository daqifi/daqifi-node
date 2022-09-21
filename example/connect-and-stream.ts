import { DaqifiDevice } from "../lib/DaqifiDevice";

(async function main() {
  const device = new DaqifiDevice("localhost");
  
  await device.connect();
  console.log("Device connected.");
  let samples = 0;
  device.on("streamdata", data => {
    console.log("data", data);
    samples++;
  });
  device.analogInChannel(0, true);
  device.analogInChannel(2, true);
  device.analogInChannel(4, true);
  device.analogInChannel(2, false);

  const secondsToStream = 60;
  device.startStreaming(10);
  const startTime = process.hrtime.bigint();
  await wait(secondsToStream * 1000);
  device.stopStreaming();
  const endTime = process.hrtime.bigint();

  await wait(1000);

  device.close();
  console.log("Device connection closed.");
  console.log("Actual stream rate: ", samples / (Number(endTime - startTime) / 1000000000), "samples/s");
})().catch(err => console.error("An error occurred trying to run this example.", err));

function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
}
