const v3 = new Uint16Array(2147483648);
try { v3.sort(Int8Array); } catch (e) {}
gc();
