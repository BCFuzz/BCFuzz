const v2 = new ArrayBuffer();
try { new Int8Array(v2, v2, 4); } catch (e) {}
gc();
