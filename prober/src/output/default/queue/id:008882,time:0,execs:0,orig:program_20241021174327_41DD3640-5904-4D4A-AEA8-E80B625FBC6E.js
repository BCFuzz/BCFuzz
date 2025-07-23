const v2 = new Int8Array(176);
const v3 = [];
const v6 = new BigUint64Array(1);
const v8 = v6["with"](BigUint64Array, v3);
try { v8.set(v2); } catch (e) {}
gc();
