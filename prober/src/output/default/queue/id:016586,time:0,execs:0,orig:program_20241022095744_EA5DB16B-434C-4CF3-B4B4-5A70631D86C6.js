const v3 = new Float64Array([-2,2,-9223372036854775808,2147483649]);
const v5 = v3["subarray"]();
v5.set(BigInt64Array);
v5.sort();
gc();
