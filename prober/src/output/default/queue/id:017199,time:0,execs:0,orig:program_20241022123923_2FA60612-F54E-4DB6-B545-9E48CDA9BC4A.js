for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v12 = createGlobalObject().Atomics;
    try { v12.add(); } catch (e) {}
}
gc();
