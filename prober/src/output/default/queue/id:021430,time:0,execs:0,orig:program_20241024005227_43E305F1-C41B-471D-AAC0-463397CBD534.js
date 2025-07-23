const v2 = new Int8Array([0,268435441]);
const t1 = createGlobalObject().Float16Array;
new t1(v2);
gc();
