for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i17; i17--) {
            const v26 = new ArrayBuffer(9);
            const v28 = new DataView(v26);
            const v30 = Symbol.iterator;
            const o36 = {
                [v30]() {
                    const o35 = {
                        next() {
                            const o34 = {
                                "done": 10,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
            for (let i40 = 0, i41 = 10 + 10; i41--, i40 < i41;) {
                let v48 = v28.getFloat64();
                for (let v49 of "4096") {
                    [v49,v49,...v48] = o36;
                }
            }
        }
        return a13;
    }
    f11(f11, f11);
`;
for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
    for (let i63 = -3, i64 = 10; i63 < i64; i64--) {
    }
}
eval(v10).next();
for (let [i86, i87] = (() => {
        for (let i76 = 1, i77 = 10; i76 < i77; i77--) {
        }
        return [0, 10];
    })();
    i86 < i87;
    i87--) {
}
for (let i96 = -3, i97 = 10; i96 < i97; i97--) {
}
for (let [i116, i117] = (() => {
        for (let i108 = 0, i109 = 10; i108 < i109; i109--) {
        }
        return [-3, 10];
    })();
    i116 < i117;
    i117--) {
}
gc();
