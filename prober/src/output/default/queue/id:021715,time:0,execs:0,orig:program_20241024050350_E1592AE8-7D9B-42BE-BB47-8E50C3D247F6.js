const v2 = new Int16Array();
v2.constructor = BigInt64Array;
try { v2.slice(); } catch (e) {}
gc();
