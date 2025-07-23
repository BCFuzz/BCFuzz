const v3 = new Float32Array("f", 10607n, Float32Array);
try { v3.slice("f", 10607n); } catch (e) {}
gc();
