function f0() {
    for (let v2 = 0; v2 < 10; v2++) {
        const v4 = Symbol.toStringTag;
        const o5 = {
            ...v4,
        };
        for (let v6 = 0; v6 < 5; v6++) {
        }
    }
    const o9 = {
        get b() {
            super.e;
        },
        [-33020]: -33020,
    };
}
f0();
f0();
gc();
