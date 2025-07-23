for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i17; i17--) {
            const v26 = new ArrayBuffer(9);
            const v28 = new DataView(v26);
            const v30 = Symbol.iterator;
            const o35 = {
                [v30]() {
                    const o34 = {
                        next() {
                            const o33 = {
                                "done": a12,
                            };
                            return o33;
                        },
                    };
                    return o34;
                },
            };
            for (let i39 = 0, i40 = 10 + i17; i40--, i39 < i40;) {
                let v47 = v28.getFloat64(i39);
                for (let v48 of "4096") {
                    [v48,v48,...v47] = o35;
                }
            }
        }
        return v10;
    }
    f11(f11);
`;
for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
    for (let i62 = -3, i63 = 10; i62 < i63; i63--) {
    }
}
const v71 = eval(v10);
v71.next(v10, v71, v10);
for (let [i84, i85] = (() => {
        for (let i75 = 1, i76 = 10; i75 < i76; i76--) {
        }
        return [0, 1];
    })();
    i84 < i85;
    i85--) {
}
for (let i94 = -3, i95 = 10; i94 < i95; i95--) {
}
for (let i104 = 0, i105 = 10; i104 < i105; i105--) {
}
gc();
