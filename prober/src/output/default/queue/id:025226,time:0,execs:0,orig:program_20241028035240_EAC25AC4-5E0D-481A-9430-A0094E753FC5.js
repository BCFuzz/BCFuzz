const v1 = new Uint16Array();
const v4 = new SharedArrayBuffer(SharedArrayBuffer, v1.subarray(Uint16Array, Uint16Array));
const v6 = new Float32Array(v4);
v1.set(v6);
gc();
