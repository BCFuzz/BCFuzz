const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
try { v3.setInt8(); } catch (e) {}
gc();
