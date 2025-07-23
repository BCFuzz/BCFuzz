const v2 = new BigInt64Array(1000);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
for (let i8 = 5, i9 = 10; i9--, i8 < i9;) {
}
gc();
