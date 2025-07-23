const v2 = new BigInt64Array(2);
const v4 = new Uint8ClampedArray();
try { v4.set(v2); } catch (e) {}
gc();
