for (let i4 = 0, i5 = 10 + 10; i5--, i5;) {
    const v13 = createGlobalObject().Atomics;
    const v14 = v13.isLockFree(2728);
    try { v13.load(v14); } catch (e) {}
    for (let v16 = 0; v16 < 250; v16++) {
    }
}
gc();
