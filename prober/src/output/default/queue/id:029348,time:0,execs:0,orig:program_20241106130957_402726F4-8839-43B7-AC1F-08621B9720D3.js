const v1 = [-13,-13,-13,-13];
v1[112] = -13;
const t2 = createGlobalObject().Float16Array;
const v6 = new t2(v1);
const v8 = new Uint8Array(v6.buffer);
v8.set(v6);
gc();
