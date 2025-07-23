const v1 = new ArrayBuffer();
v1.transferToFixedLength();
const v5 = createGlobalObject().Float16Array;
try { new v5(v1); } catch (e) {}
gc();
