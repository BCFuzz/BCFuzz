const v1 = new Int16Array(Int16Array, Int16Array);
const v3 = new ArrayBuffer(v1, ArrayBuffer);
v3.transfer(v1);
gc();
