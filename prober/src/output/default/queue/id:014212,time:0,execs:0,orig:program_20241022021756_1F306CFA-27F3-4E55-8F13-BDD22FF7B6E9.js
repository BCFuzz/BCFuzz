const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.setFloat32(9007199254740992n); } catch (e) {}
gc();
