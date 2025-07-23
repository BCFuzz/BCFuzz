const v1 = new Uint16Array();
const v4 = new SharedArrayBuffer(Uint16Array, v1.subarray());
const v6 = new Uint32Array(v4);
v1.set(v6);
gc();
