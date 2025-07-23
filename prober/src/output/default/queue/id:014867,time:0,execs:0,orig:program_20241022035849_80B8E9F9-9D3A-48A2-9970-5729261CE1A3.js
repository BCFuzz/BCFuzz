const v2 = new Float32Array();
const v3 = v2[0];
const t1 = createGlobalObject().Float16Array;
const v7 = new t1();
v7.copyWithin(2, v3);
gc();
