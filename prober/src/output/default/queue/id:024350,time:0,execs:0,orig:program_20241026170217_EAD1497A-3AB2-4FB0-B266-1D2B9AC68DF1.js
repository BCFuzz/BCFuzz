const v1 = new BigUint64Array();
v1.buffer.transfer();
try { BigUint64Array.from(v1); } catch (e) {}
gc();
