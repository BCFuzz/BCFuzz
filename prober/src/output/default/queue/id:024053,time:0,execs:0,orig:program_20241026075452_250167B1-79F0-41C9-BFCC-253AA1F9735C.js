const t0 = createGlobalObject().Float16Array;
const v4 = new t0(150);
const v6 = new Uint8ClampedArray();
const v7 = v6.constructor;
const v8 = new v7();
const v9 = v8.subarray(v7, Uint8ClampedArray, 150);
try { v9.set(v4); } catch (e) {}
gc();
