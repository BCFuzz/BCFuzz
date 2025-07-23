const v1 = new Uint32Array();
v1.buffer;
const v4 = new Uint8Array(v1);
v4.subarray(Uint32Array, v4);
v1.set(v4);
gc();
