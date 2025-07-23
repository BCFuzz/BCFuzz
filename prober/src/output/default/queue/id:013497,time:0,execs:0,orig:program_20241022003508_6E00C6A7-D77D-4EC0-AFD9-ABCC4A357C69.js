const v1 = new ArrayBuffer();
v1.transferToFixedLength(v1, v1, ArrayBuffer, v1);
try { new Float32Array(v1); } catch (e) {}
gc();
