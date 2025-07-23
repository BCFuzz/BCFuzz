const v2 = new Float64Array();
v2.buffer;
const v4 = new Uint32Array(v2, Uint32Array);
v2["set"](v4);
gc();
