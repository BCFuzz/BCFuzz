const v1 = new Uint8Array(Uint8Array, Uint8Array);
v1.buffer.transfer();
try { new Uint8ClampedArray(v1); } catch (e) {}
gc();
