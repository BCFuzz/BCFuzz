const v2 = new Uint8Array(3673);
const v4 = new BigInt64Array();
try { v4.set(v2); } catch (e) {}
gc();
