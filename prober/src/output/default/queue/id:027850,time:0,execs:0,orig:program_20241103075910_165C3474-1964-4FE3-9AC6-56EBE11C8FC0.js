Int8Array[0] = -650167365n;
const v5 = new ArrayBuffer(255);
const v6 = new Uint8ClampedArray(v5);
const v7 = v6.with();
try { v7.set(Int8Array); } catch (e) {}
gc();
