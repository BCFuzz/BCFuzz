const v2 = new Float32Array(9);
const v3 = v2.copyWithin(9, 9, 9);
v3.subarray(v3, v3);
v3.with();
gc();
