const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v2 = v1[127];
const v3 = new Float64Array(v1);
v3.constructor = v2;
v3.fill().subarray(Float64Array);
gc();
