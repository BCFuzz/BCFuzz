const v3 = new Uint32Array(1000);
const v5 = new Int8Array(v3.buffer);
v5.set(v3);
gc();
