const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
v1.transferToFixedLength();
try { new BigInt64Array(v1); } catch (e) {}
gc();
