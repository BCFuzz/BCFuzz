function f0() {
    const v3 = new Int16Array(1880);
    for (const v4 in v3) {
    }
    for (let i7 = 0, i8 = 10;
        (() => {
            let v9 = i8--;
            v9--;
            return i7 < i8;
        })();
        ) {
        const v19 = createGlobalObject().Atomics.load(v3, i7);
        function f20(a21, a22, a23, a24) {
            const o25 = {
                "b": v19,
            };
            return o25;
        }
        f20();
    }
    return Int16Array;
}
f0();
f0();
gc();
