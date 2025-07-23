const v2 = createGlobalObject().Float16Array;
const v4 = new Int8Array();
const v6 = new v2(v4.buffer);
v6.set(v4);
gc();
