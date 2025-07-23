const v2 = new ArrayBuffer();
const v4 = new DataView(v2);
try { v4.getInt8(256); } catch (e) {}
gc();
