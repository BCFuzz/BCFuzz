const v1 = new BigInt64Array();
v1.buffer.transferToFixedLength(v1, BigInt64Array, BigInt64Array, v1);
try { Uint32Array.from(v1); } catch (e) {}
gc();
