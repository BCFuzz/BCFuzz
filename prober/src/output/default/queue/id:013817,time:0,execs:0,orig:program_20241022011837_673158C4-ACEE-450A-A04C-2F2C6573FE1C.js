const v1 = new ArrayBuffer();
transferArrayBuffer(v1);
try { new Uint8Array(v1); } catch (e) {}
gc();
