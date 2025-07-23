const v2 = createGlobalObject().Float16Array;
const v4 = new Float32Array();
const v5 = v2.from(v4);
try { v5.toSorted(v5); } catch (e) {}
gc();
