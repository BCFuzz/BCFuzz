const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new DataView(v1);
v1["transfer"]();
try { v3.getFloat64(); } catch (e) {}
gc();
