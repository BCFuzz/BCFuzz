Object.defineProperty(SharedArrayBuffer, "maxByteLength", { configurable: true, enumerable: true, value: "p" });
const v2 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v4 = new Uint32Array(v2);
v4.sort().indexOf(v4);
gc();
