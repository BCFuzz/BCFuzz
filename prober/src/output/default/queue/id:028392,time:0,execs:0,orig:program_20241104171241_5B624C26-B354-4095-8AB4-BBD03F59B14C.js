const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v5 = v1["transfer"]();
try { v3.getUint32(v5); } catch (e) {}
gc();
