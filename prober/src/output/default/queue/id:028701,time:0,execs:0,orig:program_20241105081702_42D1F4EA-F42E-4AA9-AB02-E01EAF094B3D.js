const v1 = new ArrayBuffer(ArrayBuffer);
const v3 = new DataView(v1);
v1["transfer"]();
try { v3.setInt16(); } catch (e) {}
gc();
