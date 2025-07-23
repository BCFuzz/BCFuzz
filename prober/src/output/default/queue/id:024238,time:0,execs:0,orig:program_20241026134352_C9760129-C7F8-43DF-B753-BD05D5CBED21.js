const v2 = new BigUint64Array(82);
const v5 = new Uint8ClampedArray(82);
const v6 = new Uint8ClampedArray(2397);
const v8 = v5 < v2 ? v5 : v2;
try { v6.lastIndexOf(v8, ...v8); } catch (e) {}
gc();
