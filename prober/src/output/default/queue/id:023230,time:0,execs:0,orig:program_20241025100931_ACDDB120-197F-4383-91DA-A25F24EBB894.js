const v2 = new Uint32Array(129);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    createGlobalObject().Atomics.store(v2, i5, i6);
}
gc();
