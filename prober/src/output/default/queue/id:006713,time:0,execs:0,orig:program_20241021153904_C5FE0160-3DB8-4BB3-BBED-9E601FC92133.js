const v1 = new Int8Array();
const v3 = v1["reverse"]();
v3.buffer;
v3.sort();
gc();
