Object.defineProperty(SharedArrayBuffer, "maxByteLength", { configurable: true, enumerable: true, value: "p" });
const v3 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v4 = new Int32Array(v3);
v4.sort();
gc();
