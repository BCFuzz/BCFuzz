const v2 = new Uint32Array();
v2.constructor = BigInt64Array;
try { v2.subarray(); } catch (e) {}
gc();
