for (let i3 = 0, i4 = 10 + 10; i4--, i4;) {
    const v11 = createGlobalObject();
    const v13 = v11.Atomics.isLockFree();
    try { v11.load(v13); } catch (e) {}
}
gc();
