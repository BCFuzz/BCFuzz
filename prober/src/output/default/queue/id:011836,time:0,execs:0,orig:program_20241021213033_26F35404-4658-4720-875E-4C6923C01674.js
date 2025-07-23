for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
    const v13 = createGlobalObject().Atomics;
    try { v13.wait(Uint8ClampedArray); } catch (e) {}
}
gc();
