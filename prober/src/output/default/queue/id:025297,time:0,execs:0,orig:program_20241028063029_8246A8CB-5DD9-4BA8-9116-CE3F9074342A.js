const v1 = new Int8Array(Int8Array, Int8Array, Int8Array);
v1.buffer.transfer();
delete v1[10000];
gc();
