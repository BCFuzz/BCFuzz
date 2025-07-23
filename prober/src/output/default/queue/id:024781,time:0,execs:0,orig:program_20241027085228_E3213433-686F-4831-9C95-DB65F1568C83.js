const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new Uint8ClampedArray(v1);
v1.transfer();
delete v3[1510];
gc();
