const v2 = new Int32Array(Uint32Array, Int32Array, Uint32Array);
const v3 = new Uint32Array(v2, Uint32Array, v2);
const v4 = new Uint32Array(v2);
v3["set"](v4, v2);
gc();
