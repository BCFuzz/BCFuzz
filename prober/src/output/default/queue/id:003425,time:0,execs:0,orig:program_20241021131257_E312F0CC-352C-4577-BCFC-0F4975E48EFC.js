const v2 = new SharedArrayBuffer(130);
try { new Int32Array(v2, 11, v2); } catch (e) {}
gc();
