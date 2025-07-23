const v1 = Uint16Array.prototype;
const v3 = new BigInt64Array();
try { v3.set(v1); } catch (e) {}
gc();
