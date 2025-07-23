const v2 = new Int16Array(512);
const v5 = new Int8Array(v2.buffer);
v5.set(v2);
gc();
