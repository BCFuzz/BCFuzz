const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v2 = v1.buffer;
v2.transferToFixedLength(Int32Array);
v1[127] = v2;
gc();
