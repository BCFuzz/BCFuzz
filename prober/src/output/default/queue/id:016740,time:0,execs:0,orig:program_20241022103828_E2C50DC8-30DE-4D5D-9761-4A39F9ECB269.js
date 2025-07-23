const v2 = new BigInt64Array(257);
const v4 = new Uint8Array();
try { v4.set(v2); } catch (e) {}
gc();
