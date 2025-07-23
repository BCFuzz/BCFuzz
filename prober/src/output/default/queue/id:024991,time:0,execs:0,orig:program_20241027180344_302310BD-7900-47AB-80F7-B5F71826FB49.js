const v2 = new BigInt64Array();
const v3 = v2.buffer;
const v4 = v3.transferToFixedLength(v3);
const v5 = new Int32Array(v4, v4, v4);
try { v5.set(v2); } catch (e) {}
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
}
gc();
