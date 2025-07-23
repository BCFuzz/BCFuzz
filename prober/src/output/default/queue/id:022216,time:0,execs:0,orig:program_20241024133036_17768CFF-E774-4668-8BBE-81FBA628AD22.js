const v0 = [-2,2,-9223372036854775808,2147483649];
v0.shift();
v0[2490] = v0;
const v3 = new Float64Array(v0);
v3["subarray"]().sort();
gc();
