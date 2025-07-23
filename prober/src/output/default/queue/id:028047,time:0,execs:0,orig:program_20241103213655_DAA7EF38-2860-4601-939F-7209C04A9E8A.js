const v2 = new Float64Array();
const v4 = new Uint32Array(v2.buffer);
v2["set"](v4);
gc();
