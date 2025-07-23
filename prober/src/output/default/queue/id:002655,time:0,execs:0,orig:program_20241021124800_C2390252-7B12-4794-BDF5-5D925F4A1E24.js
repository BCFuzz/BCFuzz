const v3 = new Int16Array();
v3[3n] >>>= 3312;
const v5 = new SharedArrayBuffer(3312, SharedArrayBuffer);
new BigUint64Array(v5);
gc();
