const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
let v4;
try { v4 = v3.getBigUint64(); } catch (e) {}
try { v3.getInt32(v3, v4); } catch (e) {}
gc();
