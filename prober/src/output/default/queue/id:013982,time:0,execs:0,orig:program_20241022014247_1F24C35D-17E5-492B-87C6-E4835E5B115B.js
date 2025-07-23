const v3 = createGlobalObject().Float16Array;
const v4 = new v3(v3);
try { v4.with(-41887n); } catch (e) {}
gc();
