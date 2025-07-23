const v3 = createGlobalObject().Float16Array;
const v5 = new Float32Array(Float32Array);
const v6 = v3.from(v5);
try { v6.toSorted(Int16Array); } catch (e) {}
gc();
