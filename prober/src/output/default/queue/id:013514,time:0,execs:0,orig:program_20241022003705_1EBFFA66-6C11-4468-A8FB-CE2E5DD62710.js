const v1 = new BigInt64Array();
const v2 = v1.copyWithin();
const v3 = v2.slice(v1, v1, v2);
const v6 = new Uint8Array();
try { v3.set(v6, -2147483649); } catch (e) {}
gc();
