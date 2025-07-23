for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v12 = new BigUint64Array(256);
    const v15 = createGlobalObject().Atomics;
    try { v15.sub(v12); } catch (e) {}
}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
