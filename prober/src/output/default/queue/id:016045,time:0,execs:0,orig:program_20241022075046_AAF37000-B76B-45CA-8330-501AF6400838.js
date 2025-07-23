const v1 = new ArrayBuffer();
v1.transferToFixedLength();
try { new DataView(v1); } catch (e) {}
gc();
