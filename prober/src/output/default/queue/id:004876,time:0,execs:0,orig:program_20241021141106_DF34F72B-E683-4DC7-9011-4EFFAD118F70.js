const v1 = new Float64Array(Float64Array);
try { v1.toSorted(Float64Array); } catch (e) {}
gc();
