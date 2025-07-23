const v2 = new Float64Array(Float64Array, Uint16Array, Float64Array);
const v3 = v2[127];
const v4 = new Uint16Array();
v4.constructor = v3;
const v5 = v4.fill();
v5.subarray(v5, Uint16Array);
gc();
