const v2 = new ArrayBuffer();
const v5 = createGlobalObject().Float16Array;
try { new v5(v2, 1); } catch (e) {}
gc();
