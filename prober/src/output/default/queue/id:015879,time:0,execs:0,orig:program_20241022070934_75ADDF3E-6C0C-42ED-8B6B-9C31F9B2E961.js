for (let i4 = 0, i5 = 10 + 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.store(i4, undefined, v14); } catch (e) {}
    for (let v16 = 0; v16 < 250; v16++) {
    }
}
[-1024,268435441];
gc();
