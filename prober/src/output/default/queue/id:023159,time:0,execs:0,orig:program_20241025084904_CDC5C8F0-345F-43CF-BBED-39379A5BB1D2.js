const v2 = new SharedArrayBuffer();
const v4 = new Uint16Array();
v4.subarray();
const v6 = new Int8Array(v2);
v6.set(v4);
gc();
