const v2 = new SharedArrayBuffer();
try { new Uint8Array(v2, 2580); } catch (e) {}
gc();
