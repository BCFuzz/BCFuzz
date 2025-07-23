const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v5 = new Float32Array(v2, v3, v3);
const v6 = v3.from(v5);
try { v6.fill(1n); } catch (e) {}
gc();
