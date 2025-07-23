const v1 = new SharedArrayBuffer();
const v2 = v1.slice();
try { v2.grow(SharedArrayBuffer); } catch (e) {}
gc();
