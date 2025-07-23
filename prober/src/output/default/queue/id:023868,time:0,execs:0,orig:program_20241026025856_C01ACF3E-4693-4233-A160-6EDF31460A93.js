const v1 = new BigInt64Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const v16 = new Float32Array();
try { v16.toSorted(v4); } catch (e) {}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
