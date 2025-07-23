const v2 = createGlobalObject().Float16Array;
const v5 = new SharedArrayBuffer(130);
try { new v2(v5, 11, v5); } catch (e) {}
gc();
