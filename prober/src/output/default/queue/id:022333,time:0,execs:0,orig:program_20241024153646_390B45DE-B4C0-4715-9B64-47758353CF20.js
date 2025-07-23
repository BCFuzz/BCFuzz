const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new Uint32Array(v1);
v1.transfer();
delete v3[6];
gc();
