const v2 = new Uint32Array(3);
const v6 = createGlobalObject().Atomics;
try { v6.store(v2, v6, 15n); } catch (e) {}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
