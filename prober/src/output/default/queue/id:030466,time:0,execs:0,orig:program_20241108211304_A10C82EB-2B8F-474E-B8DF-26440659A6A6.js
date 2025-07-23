for (let i2 = 0, i3 = 1024; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 10, i17 = 10; -13369 !== i17; i17--) {
        }
        for (let [i36, i37] = (() => {
                for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
                }
                return [0, 10];
            })();
            (() => {
                i37--;
                const v39 = i36 < i37;
                for (let [i44, i45] = (() => {
                        if (0 !== 10) {
                        }
                        return [0, 10 + 10];
                    })();
                    i45--, i45;
                    ) {
                }
                return v39;
            })();
            ) {
        }
        return v10;
    }
    f11();
`;
for (let i58 = 0, i59 = 10; i58 < i59; i59--) {
    for (let i68 = 0, i69 = 10; i68 < i69; i69--) {
    }
}
eval(v10).next(1024);
gc();
