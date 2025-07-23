const v3 = new Uint16Array(BigUint64Array);
try { v3.sort(Symbol); } catch (e) {}
gc();
