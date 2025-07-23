const v2 = new BigInt64Array();
const v4 = new Uint8ClampedArray();
try { v4.with(v2, 1337639316n); } catch (e) {}
gc();
