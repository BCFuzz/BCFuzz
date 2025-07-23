const v2 = new BigUint64Array(1916);
const v4 = new Uint8ClampedArray();
try { v4.set(v2); } catch (e) {}
gc();
