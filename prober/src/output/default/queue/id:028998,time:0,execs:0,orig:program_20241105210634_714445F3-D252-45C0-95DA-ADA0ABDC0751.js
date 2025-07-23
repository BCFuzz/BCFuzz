const v0 = [];
v0[1] = v0;
const t2 = createGlobalObject().Float16Array;
const v5 = new t2(v0);
const v7 = new Uint8ClampedArray(v5.buffer);
v7.set(v5);
gc();
