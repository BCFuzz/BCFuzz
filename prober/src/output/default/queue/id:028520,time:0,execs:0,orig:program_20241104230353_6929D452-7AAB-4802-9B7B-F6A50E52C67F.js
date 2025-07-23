const v2 = new Int8Array();
const v4 = new Int16Array(v2.buffer);
v4.set(v2);
gc();
