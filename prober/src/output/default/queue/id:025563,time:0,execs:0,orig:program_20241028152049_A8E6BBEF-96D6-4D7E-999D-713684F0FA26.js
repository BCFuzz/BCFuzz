const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v3 = new Uint16Array();
const v4 = v3.subarray();
const v5 = new Float32Array(v4, v4, v3);
const v7 = v1 > v5 ? v5 : v5;
v7.buffer;
v7["set"](v3);
gc();
