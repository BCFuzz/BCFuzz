const v1 = new BigUint64Array();
const v2 = v1.buffer;
try { v2.resize(); } catch (e) {}
gc();
