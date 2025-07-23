const v2 = new Uint32Array();
const v4 = new Int8Array(v2, Int8Array, 1e-15);
v4.set(v2, 1e-15);
gc();
