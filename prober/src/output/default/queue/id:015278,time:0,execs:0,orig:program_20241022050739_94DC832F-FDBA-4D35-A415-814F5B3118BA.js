const v1 = new BigUint64Array();
const v4 = new Uint8Array(128);
try { v1.set(v4); } catch (e) {}
gc();
