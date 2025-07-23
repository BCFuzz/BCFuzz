const v2 = new SharedArrayBuffer();
try { new Uint8Array(v2, 9007199254740991); } catch (e) {}
gc();
