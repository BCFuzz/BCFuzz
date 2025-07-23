const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
const v5 = new SharedArrayBuffer();
const v7 = new Float64Array(v5);
v7.set(v3);
gc();
