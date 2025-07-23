const v3 = new Uint8Array(16);
v3[9] = 257;
const t2 = createGlobalObject().Float16Array;
const v7 = new t2();
const t4 = v7.constructor;
new t4(v3);
gc();
