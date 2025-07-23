const v1 = new Uint32Array();
const v4 = new Uint16Array(v1, v1.subarray(), Uint16Array);
v1.set(v4);
gc();
