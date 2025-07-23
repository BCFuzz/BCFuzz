const v2 = new Float64Array(217);
v2[8] = v2;
const t2 = createGlobalObject().Float16Array;
const v6 = new t2();
const t4 = v6.constructor;
new t4(v2);
gc();
