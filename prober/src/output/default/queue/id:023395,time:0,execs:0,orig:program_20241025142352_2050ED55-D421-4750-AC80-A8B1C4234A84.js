const v2 = new Int32Array(681);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    createGlobalObject().Atomics.store(v2, i7, 127);
}
gc();
