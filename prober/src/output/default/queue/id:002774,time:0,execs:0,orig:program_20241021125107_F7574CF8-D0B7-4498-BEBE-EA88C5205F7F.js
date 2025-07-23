const v2 = new Float32Array(5, 5, 5);
try { v2.with(5); } catch (e) {}
gc();
