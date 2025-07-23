let v1;
try { v1 = SharedArrayBuffer(); } catch (e) {}
const v2 = new SharedArrayBuffer(v1, SharedArrayBuffer);
new DataView(v2, DataView, v1);
gc();
