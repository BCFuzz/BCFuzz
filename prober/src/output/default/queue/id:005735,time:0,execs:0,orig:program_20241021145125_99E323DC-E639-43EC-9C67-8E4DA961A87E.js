Int32Array[1] = 16n;
try { new Int32Array(Int32Array); } catch (e) {}
gc();
