const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            i7--) {
            for (let i26 = 0, i27 = 10;
                i26 < i27;
                (() => {
                    for (let v31 = 0; v31 < 5; v31++) {
                        const o35 = {
                            __proto__: null,
                            [null]() {
                                super[v31];
                            },
                        };
                        try { o35.null(); } catch (e) {}
                    }
                    i27--;
                })()) {
            }
        }
        return v0;
    }
    f1();
`;
eval(v0).next();
gc();
