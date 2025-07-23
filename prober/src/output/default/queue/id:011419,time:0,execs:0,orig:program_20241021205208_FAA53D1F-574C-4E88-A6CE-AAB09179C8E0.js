const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
const v4 = v3.setFloat32;
try { v4(v1, v1); } catch (e) {}
gc();
