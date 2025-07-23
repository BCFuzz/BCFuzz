const v2 = new Float64Array([-2,2,-9223372036854775808,2147483649]);
const v4 = v2["subarray"]();
v4[0] = v4;
v4.sort();
gc();
