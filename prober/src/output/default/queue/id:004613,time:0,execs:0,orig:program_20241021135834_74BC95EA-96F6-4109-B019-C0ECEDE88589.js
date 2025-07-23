const v1 = new Int32Array(Int32Array);
try { v1.toSorted(v1); } catch (e) {}
gc();
