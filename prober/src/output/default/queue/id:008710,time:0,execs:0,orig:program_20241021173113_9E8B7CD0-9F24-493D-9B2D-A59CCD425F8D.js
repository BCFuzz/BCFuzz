SharedArrayBuffer.maxByteLength = [-5.0,1000000.0];
const v2 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v4 = new DataView(v2);
try { v4.setFloat16(); } catch (e) {}
gc();
