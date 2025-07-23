const v1 = new ArrayBuffer();
v1.transferToFixedLength();
try { new Int8Array(v1); } catch (e) {}
gc();
