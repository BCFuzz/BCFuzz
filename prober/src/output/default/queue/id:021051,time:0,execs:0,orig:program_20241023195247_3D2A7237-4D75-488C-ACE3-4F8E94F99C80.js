function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10;
        i7 < i8;
        (() => {
            i8--;
            class C13 {
            }
        })()) {
    }
    for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
        const v28 = createGlobalObject().Atomics;
        try { v28.load(v3, 1880); } catch (e) {}
    }
    return 1880;
}
f0();
f0();
gc();
