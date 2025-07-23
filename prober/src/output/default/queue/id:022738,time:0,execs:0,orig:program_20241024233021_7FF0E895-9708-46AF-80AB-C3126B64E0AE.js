function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10;
        (() => {
            i8--;
            new Int32Array();
            function f12(a13, a14, a15, a16) {
            }
            f12();
            return i7 < i8;
        })();
        ) {
        const v25 = createGlobalObject().Atomics;
        try { v25.load(v3, 1880); } catch (e) {}
    }
    return f0;
}
f0();
f0();
gc();
