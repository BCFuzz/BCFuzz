const v3 = new Uint32Array(1880);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    createGlobalObject().Atomics.or(v3, v3, -5.0);
}
gc();
