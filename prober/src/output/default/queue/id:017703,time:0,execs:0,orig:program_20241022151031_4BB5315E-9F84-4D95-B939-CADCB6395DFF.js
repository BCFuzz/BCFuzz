Float32Array[1] = 9n;
const v4 = new Uint8Array(7);
try { v4.set(Float32Array); } catch (e) {}
gc();
