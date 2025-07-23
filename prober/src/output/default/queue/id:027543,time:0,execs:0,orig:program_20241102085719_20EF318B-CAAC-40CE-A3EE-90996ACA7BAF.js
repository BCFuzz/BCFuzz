const v1 = new Uint32Array(Uint32Array, Uint32Array);
const v3 = new Float64Array(v1, Uint32Array, Float64Array);
v3.subarray();
v1.subarray().set(v3);
gc();
