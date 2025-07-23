const v2 = new Uint32Array(Uint32Array);
const v3 = v2.subarray();
v3.constructor = Float64Array;
v3.slice();
gc();
