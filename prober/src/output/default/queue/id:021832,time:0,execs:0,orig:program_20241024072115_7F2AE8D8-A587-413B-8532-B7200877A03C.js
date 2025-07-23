const v1 = new ArrayBuffer(ArrayBuffer);
const v3 = new Uint8ClampedArray(v1);
v1.transfer();
try { v3.slice(); } catch (e) {}
gc();
