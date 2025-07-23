const v1 = new BigUint64Array();
v1.buffer.transfer();
try { ("isSealed").endsWith(v1); } catch (e) {}
gc();
