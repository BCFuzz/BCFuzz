const v2 = SharedArrayBuffer.prototype;
try { new SharedArrayBuffer(undefined, v2); } catch (e) {}
gc();
