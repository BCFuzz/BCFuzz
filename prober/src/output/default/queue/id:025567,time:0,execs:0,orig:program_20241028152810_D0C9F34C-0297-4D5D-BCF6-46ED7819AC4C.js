const v3 = new Int32Array(10);
const v5 = new Int8Array(v3.buffer);
v5.set(v3);
gc();
