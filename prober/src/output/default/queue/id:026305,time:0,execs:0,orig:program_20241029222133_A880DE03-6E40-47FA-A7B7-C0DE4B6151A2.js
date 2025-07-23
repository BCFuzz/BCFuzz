function f0() {
    const v3 = new Int8Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
        }
        const v37 = createGlobalObject().Atomics;
        try { v37.load(v3, 1880); } catch (e) {}
    }
    return f0;
}
f0();
f0();
gc();
