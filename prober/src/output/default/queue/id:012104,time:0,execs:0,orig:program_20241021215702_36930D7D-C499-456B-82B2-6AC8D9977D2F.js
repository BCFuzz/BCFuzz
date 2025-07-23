const v2 = new BigUint64Array(294);
const v3 = v2.values();
try { new Float64Array(v3); } catch (e) {}
gc();
