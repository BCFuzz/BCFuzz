const v3 = new ArrayBuffer(1, ArrayBuffer);
const v6 = createGlobalObject().Float16Array;
try { new v6(v3, 1, 3.9759101349074227e+307); } catch (e) {}
gc();
