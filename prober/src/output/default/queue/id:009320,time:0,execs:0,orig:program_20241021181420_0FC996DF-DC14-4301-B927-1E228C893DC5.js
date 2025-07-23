const v1 = 9223372036854775807n ^ 9223372036854775807n;
const v3 = new ArrayBuffer();
const v5 = new DataView(v3);
try { v5.getInt16(v1); } catch (e) {}
gc();
