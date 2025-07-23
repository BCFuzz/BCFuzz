const v1 = new Uint8Array(Uint8Array);
v1.buffer.transfer();
try { Int8Array.from(v1); } catch (e) {}
gc();
