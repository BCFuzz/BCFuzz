const v2 = new BigInt64Array();
const v3 = v2.buffer;
v3.transferToFixedLength(v2, BigInt64Array, v3, Int32Array, v2);
try { Int32Array.from(v2); } catch (e) {}
gc();
