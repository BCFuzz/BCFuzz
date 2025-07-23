const v2 = new ArrayBuffer();
const v4 = new DataView(v2);
try { v4.setUint32(-2.0); } catch (e) {}
gc();
