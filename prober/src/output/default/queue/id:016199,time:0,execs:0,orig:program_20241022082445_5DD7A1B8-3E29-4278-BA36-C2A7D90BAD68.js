const v3 = new Uint8Array(2147483648);
try { v3.sort(Int8Array); } catch (e) {}
gc();
