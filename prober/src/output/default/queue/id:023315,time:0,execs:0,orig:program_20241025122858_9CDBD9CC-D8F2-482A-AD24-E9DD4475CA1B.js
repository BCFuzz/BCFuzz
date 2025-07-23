const v2 = new Int16Array(256);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    createGlobalObject().Atomics.store(v2);
}
gc();
