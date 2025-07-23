const v0 = [-2,2,-9223372036854775808,2147483649];
v0[1] = v0;
const v2 = new Float64Array(v0);
const v4 = v2["subarray"]();
v4[0] = v4;
v4.sort();
gc();
