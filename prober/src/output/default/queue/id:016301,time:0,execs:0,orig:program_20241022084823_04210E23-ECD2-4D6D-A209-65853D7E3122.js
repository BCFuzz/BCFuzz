const v2 = new Float64Array([-2,2,-9223372036854775808,2147483649]);
v2["subarray"]().sort();
gc();
