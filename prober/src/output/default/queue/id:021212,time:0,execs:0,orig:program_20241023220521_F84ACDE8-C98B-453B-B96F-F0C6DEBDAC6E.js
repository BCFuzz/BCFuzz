const v2 = new Int16Array(Uint32Array, Int16Array, Int16Array);
const v3 = new Uint32Array(v2, v2, Uint32Array);
v3.subarray(Int16Array, Uint32Array);
v2.buffer;
v2["set"](v3);
gc();
