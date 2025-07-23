const v1 = new BigUint64Array();
v1.buffer.transfer();
delete v1[2147483648];
gc();
