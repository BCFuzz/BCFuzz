const v2 = new BigUint64Array(7);
const v4 = new Uint16Array();
const v6 = v4.sort().toReversed();
try { v6.set(v2); } catch (e) {}
gc();
