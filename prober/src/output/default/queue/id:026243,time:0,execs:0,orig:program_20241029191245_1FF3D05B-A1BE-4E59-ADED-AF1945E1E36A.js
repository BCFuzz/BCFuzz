const t0 = createGlobalObject().Float16Array;
const v5 = new t0(BigUint64Array);
v5.constructor = Uint8ClampedArray;
v5.slice();
gc();
