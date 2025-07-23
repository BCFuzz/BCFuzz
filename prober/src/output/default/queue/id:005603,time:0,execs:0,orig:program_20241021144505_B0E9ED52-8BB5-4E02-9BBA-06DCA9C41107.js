const v1 = Int32Array.prototype;
try { v1.set(); } catch (e) {}
gc();
