const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v3 = v1.constructor;
v3.__proto__ = Float32Array;
const v4 = new v3();
v4.subarray(v4);
gc();
