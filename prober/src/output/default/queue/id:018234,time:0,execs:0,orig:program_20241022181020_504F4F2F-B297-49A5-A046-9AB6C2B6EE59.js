BigInt64Array[1] = [268435441];
const v4 = new Float64Array([-2,2,-9223372036854775808,2147483649]);
const v6 = v4["subarray"]();
v6.set(BigInt64Array);
v6.sort();
gc();
