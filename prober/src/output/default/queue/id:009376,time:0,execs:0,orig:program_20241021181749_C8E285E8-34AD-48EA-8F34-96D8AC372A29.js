const v2 = new Uint16Array(257);
const v4 = new BigUint64Array();
const v6 = v4["subarray"]();
try { v6.set(v2); } catch (e) {}
gc();
