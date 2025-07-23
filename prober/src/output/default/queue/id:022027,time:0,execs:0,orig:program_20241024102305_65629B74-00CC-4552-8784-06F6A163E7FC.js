for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.store(536870912n, 2); } catch (e) {}
}
gc();
