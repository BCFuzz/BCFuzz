for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
    const v11 = createGlobalObject();
    const v12 = v11.Atomics;
    try { v12.waitAsync(v11); } catch (e) {}
}
gc();
