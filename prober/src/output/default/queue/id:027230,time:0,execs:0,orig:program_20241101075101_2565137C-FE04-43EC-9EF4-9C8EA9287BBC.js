const v3 = new Uint32Array(10);
const v5 = new Int16Array(v3.buffer);
v5.set(v3);
gc();
