const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
try { v3.getUint16(v3); } catch (e) {}
try { v3.getFloat16(); } catch (e) {}
gc();
