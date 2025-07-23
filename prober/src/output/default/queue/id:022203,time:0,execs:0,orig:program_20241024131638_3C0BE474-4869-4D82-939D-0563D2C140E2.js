const v2 = new Int8Array(4294967296);
try { new Int16Array(v2); } catch (e) {}
gc();
