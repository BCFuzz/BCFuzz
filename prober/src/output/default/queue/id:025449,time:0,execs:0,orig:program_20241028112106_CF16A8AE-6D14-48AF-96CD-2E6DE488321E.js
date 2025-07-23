const v2 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
v2.constructor = BigInt64Array;
try { v2.slice(); } catch (e) {}
gc();
