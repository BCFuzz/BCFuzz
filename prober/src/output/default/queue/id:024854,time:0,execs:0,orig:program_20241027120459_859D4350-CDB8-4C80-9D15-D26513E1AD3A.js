const v2 = new Uint8Array();
v2.constructor = BigInt64Array;
try { v2.subarray(); } catch (e) {}
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
gc();
