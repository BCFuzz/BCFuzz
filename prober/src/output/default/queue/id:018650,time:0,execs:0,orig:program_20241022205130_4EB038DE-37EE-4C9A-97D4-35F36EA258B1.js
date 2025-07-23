const v2 = new Int8Array();
const v6 = v2[Int16Array];
const v7 = new Float32Array(v2);
v7.copyWithin(2390, 1024, v6);
gc();
