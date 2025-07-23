const v2 = new ArrayBuffer(1000, ArrayBuffer);
const v5 = createGlobalObject().Float16Array;
try { new v5(v2, v5, 1000); } catch (e) {}
gc();
