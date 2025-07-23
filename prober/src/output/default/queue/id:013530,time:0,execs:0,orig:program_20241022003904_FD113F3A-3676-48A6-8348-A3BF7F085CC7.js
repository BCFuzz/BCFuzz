const v1 = new Uint8Array();
const t1 = createGlobalObject().Float16Array;
const v5 = new t1();
const t3 = v5.constructor;
new t3(v1);
gc();
