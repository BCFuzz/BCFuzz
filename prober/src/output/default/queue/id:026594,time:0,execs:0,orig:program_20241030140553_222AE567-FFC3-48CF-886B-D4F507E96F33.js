const v2 = new Int32Array();
const v4 = new Int8Array(v2.buffer);
v4.set(v2);
gc();
