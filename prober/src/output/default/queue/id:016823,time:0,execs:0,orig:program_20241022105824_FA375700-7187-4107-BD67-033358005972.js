const v2 = new Int8Array(1000);
const v3 = v2[62];
const v6 = new Uint16Array(7);
v6.subarray(1000, 7);
v6.indexOf(v3);
gc();
