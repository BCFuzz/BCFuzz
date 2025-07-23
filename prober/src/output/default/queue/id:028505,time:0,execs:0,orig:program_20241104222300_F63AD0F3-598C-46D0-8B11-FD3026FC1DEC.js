const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                const o19 = {
                    set b(a12) {
                        Object.defineProperty(this, Symbol.toStringTag, { writable: true, enumerable: true, value: "z6CtS" });
                        const v15 = a3 + a12;
                        ("z6CtS").replace(9007199254740992, 9007199254740992);
                        for (let v17 = 0; v17 < 5; v17++) {
                        }
                        v15 in Float64Array;
                    },
                };
                o19.b = o19;
                return i6 < i7;
            })();
            i7--) {
        }
        return v0;
    }
    f1(v0, f1);
`;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
}
eval(v0).next(v0, v0, v0, v0);
gc();
