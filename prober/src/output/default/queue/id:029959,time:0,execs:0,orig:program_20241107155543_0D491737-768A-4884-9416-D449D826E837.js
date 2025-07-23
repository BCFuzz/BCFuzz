function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        constructor(a7, a8, a9, a10) {
            for (let i13 = 0, i14 = 10; i13 !== i14; i14--) {
            }
            for (let i23 = 0, i24 = 10;
                (() => {
                    for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
                    }
                    return i23 < i24;
                })();
                i24--) {
            }
            function f41(a42) {
                const o53 = {
                    "h": a42,
                    [-2]: f41,
                    "c": a42,
                    "d": f41,
                    "f": a42,
                    valueOf(a44, a45) {
                        return a10;
                    },
                    "a": a42,
                    [a42]: this,
                    n(a47, a48, a49) {
                        return a42;
                    },
                    [4294967295](a51, a52) {
                    },
                };
                return o53;
            }
            const v54 = f41();
            class C55 {
            }
            const v56 = new C55();
            const v57 = new C55();
            for (const v58 in v54) {
                v57[v58] = v56;
            }
            for (let i61 = 0, i62 = 10; i62--, i61 < i62;) {
            }
        }
    }
    new C5();
}
new F0(F0, F0);
gc();
