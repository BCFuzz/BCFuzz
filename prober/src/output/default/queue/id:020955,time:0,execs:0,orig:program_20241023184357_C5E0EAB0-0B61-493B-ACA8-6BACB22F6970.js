const v2 = new Uint8Array();
v2.constructor = BigUint64Array;
try { v2.slice(Uint8Array, BigUint64Array); } catch (e) {}
gc();
