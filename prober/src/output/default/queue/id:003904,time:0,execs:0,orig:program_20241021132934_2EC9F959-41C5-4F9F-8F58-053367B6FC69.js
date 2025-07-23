const v1 = new SharedArrayBuffer();
try { new Int32Array(v1, -536870912); } catch (e) {}
gc();
