const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v2 = v1.grow;
try { v2(); } catch (e) {}
gc();
