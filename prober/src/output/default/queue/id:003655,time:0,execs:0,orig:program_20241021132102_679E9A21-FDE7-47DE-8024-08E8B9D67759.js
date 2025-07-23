const v2 = new Int8Array(Int8Array, Int8Array);
const v3 = v2.copyWithin();
try { v3.toSorted(-6n); } catch (e) {}
gc();
