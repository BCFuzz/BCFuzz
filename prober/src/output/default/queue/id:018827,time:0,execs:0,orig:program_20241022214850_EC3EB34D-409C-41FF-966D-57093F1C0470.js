const v1 = new Uint8Array();
const v2 = v1.buffer;
v2.transferToFixedLength();
v1[127] = v2;
gc();
