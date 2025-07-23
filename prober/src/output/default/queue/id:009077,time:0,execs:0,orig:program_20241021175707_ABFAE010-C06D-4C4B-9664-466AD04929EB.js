const v2 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v4 = new DataView(v2);
try { v4.setFloat64("-789426228"); } catch (e) {}
gc();
