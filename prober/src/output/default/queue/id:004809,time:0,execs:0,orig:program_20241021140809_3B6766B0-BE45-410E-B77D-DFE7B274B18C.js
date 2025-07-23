const v2 = new Uint32Array(995);
const v3 = v2.entries();
try { new BigInt64Array(v3); } catch (e) {}
gc();
