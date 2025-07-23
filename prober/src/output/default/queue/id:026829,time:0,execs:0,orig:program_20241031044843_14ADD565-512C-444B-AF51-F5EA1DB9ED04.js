const v2 = new Uint8Array();
const v4 = new Uint32Array(v2.buffer);
v4.set(v2);
gc();
