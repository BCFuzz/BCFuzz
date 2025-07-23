const v3 = new ArrayBuffer(undefined);
const v5 = new DataView(v3);
try { v5.setInt16(undefined, v5, null); } catch (e) {}
gc();
