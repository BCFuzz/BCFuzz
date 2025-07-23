const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
v1["transfer"]();
try { v3.setInt32(); } catch (e) {}
gc();
