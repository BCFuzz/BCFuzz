const v3 = new Float32Array(10);
v3[7] = v3;
const v5 = new Int8Array(v3.buffer);
v5.set(v3);
gc();
