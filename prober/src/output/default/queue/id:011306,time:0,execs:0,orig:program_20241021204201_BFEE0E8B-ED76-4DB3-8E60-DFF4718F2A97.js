const v2 = new Uint8Array(16);
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
const t3 = v6.constructor;
new t3(v2);
gc();
