for (let i5 = 0, i6 = 10 + 10; i6--, i5 < i6;) {
    const v15 = createGlobalObject().Atomics;
    try { v15.compareExchange(Uint32Array, Uint32Array, 16, i6); } catch (e) {}
    for (let v17 = 0; v17 < 250; v17++) {
    }
}
gc();
