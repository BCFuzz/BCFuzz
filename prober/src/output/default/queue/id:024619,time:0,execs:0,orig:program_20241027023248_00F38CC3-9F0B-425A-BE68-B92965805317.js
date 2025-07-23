const v2 = new Int16Array(Float64Array, Float64Array);
const v3 = new Float64Array(v2, v2, Int16Array);
v2.buffer;
v2["set"](v3);
gc();
