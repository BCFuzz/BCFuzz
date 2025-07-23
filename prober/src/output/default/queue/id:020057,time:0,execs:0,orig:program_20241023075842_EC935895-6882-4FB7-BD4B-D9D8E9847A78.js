const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v4 = v3.setUint32;
try { v4.call(); } catch (e) {}
gc();
