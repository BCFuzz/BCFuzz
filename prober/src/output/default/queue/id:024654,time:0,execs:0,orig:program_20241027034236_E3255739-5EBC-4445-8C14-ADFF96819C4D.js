for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v12 = new Uint32Array(11);
for (let i16 = 0, i17 = 10; i17--, i16 < i17;) {
    const v26 = createGlobalObject().Atomics;
    v26.store(v12, v26, 4294967296);
}
gc();
