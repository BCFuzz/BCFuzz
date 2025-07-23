const v1 = new Uint32Array();
const v4 = new Uint16Array(v1.subarray(), Uint32Array);
v4.buffer;
v1.set(v4);
gc();
