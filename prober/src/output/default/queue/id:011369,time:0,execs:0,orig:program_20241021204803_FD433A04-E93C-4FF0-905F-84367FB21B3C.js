const v1 = new Uint8ClampedArray();
const v2 = v1.copyWithin();
try { BigUint64Array.from(v2); } catch (e) {}
gc();
