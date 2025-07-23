const v1 = new Int16Array();
const v2 = v1.buffer;
v2.transferToFixedLength(Int16Array, Int16Array);
v1[127] = v2;
gc();
