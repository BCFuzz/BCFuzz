const v1 = 127 !== 127;
const v3 = new BigUint64Array(127);
v3.with(v3, v1);
gc();
