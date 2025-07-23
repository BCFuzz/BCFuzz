const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v5 = v1["transfer"]();
try { v3.setFloat32(v5, v5); } catch (e) {}
gc();
