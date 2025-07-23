const v2 = new Int8Array(4294967296);
try { v2.sort(Float32Array); } catch (e) {}
gc();
