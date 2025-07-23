const v2 = new Int16Array();
const v4 = new Uint32Array(v2.buffer);
v4.set(v2);
gc();
