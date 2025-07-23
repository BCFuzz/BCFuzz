const v2 = new SharedArrayBuffer(1000);
const v4 = new Uint8Array(v2);
v4.sort();
gc();
