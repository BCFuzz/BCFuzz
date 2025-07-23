const v1 = 129 % 129;
const v3 = new Float64Array(129);
const v4 = v3.lastIndexOf(v1);
const v6 = new Int16Array(v4, v1, 129);
const v7 = v6.copyWithin(v4, v4, v1);
v7.subarray(v1);
v7.sort();
gc();
