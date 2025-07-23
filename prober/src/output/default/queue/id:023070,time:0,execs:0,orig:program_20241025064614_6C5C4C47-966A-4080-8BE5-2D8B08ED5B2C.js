const v2 = new Uint16Array(129);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    createGlobalObject().Atomics.store(v2, i5, i6);
}
for (let i19 = -3, i20 = 10; i19 < i20; i20--) {
}
gc();
