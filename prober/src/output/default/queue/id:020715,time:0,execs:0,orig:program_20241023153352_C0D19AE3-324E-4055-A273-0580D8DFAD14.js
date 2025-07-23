function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let [i10, i11] = (() => {
            function f7(a8, a9) {
                return a9;
            }
            return [0, 10];
        })();
        i11--, i10 < i11;
        ) {
        const v20 = createGlobalObject().Atomics;
        try { v20.load(v3, 1880); } catch (e) {}
    }
    return f0;
}
f0();
f0();
gc();
