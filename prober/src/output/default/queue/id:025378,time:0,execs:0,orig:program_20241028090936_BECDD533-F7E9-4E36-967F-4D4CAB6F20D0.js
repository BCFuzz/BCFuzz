Float32Array[2] = -4294967297n;
const v4 = new Int32Array(1000);
try { v4.set(Float32Array); } catch (e) {}
gc();
