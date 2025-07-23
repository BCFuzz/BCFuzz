const v2 = createGlobalObject().Float16Array;
const v4 = new Uint16Array();
const v5 = new v2();
v5.buffer;
v5.set(v4);
gc();
