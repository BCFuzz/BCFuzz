const v1 = new BigUint64Array();
v1.buffer.transfer();
try { v1.fill(); } catch (e) {}
gc();
