const v1 = new BigInt64Array();
v1.buffer.transferToFixedLength();
delete v1[5];
gc();
