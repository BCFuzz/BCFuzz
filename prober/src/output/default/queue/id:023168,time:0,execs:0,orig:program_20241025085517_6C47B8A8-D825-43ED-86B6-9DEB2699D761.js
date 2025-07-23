const v2 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v3 = new Uint32Array();
v3.subarray(v3, v2);
v2.buffer;
v2["set"](v3);
gc();
