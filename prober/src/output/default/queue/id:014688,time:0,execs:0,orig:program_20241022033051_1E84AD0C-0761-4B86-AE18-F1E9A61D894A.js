const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setInt8(Float64Array, 1823397264n); } catch (e) {}
gc();
