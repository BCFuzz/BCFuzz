const v2 = new ArrayBuffer();
const v4 = new DataView(v2);
try { v4.setInt32(536870887n); } catch (e) {}
gc();
