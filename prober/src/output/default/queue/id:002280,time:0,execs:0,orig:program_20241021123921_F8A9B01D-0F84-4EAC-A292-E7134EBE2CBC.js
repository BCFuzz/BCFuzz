const v2 = new Int8Array(128);
try { v2.sort(Int8Array); } catch (e) {}
gc();
