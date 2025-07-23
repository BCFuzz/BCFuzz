const v1 = [-2,2,-9223372036854775808,2147483649];
v1.push(44);
v1[2490] = v1;
const v4 = new Float64Array(v1);
v4["subarray"]().sort();
gc();
