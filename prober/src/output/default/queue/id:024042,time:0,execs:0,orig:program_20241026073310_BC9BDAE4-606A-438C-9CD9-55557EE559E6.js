function f0() {
    const v3 = new Int32Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
        const v27 = createGlobalObject().Atomics;
        try { v27.load(v3, 1880); } catch (e) {}
    }
    return v3;
}
f0();
f0();
gc();
