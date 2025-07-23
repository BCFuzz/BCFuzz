const v1 = 255n | 255n;
const v3 = new Float64Array(Float64Array);
try { v3.toSorted(v1); } catch (e) {}
gc();
