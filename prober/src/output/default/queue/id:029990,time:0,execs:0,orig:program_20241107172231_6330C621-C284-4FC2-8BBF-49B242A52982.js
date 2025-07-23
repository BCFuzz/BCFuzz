const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 !== i8; i8--) {
        }
        for (let i18 = 0, i19 = 10 + 10;
            i19--, i18 < i19;
            (() => {
                for (let i27 = -3, i28 = 10; 8 < i28; i28--) {
                }
            })()) {
        }
        const v38 = new Float64Array(a3, a3);
        for (const v39 of v38) {
            switch (v39) {
                case Int8Array:
                    continue;
                    break;
            }
        }
        return a3;
    }
    f2(v1, f2);
`;
eval(v1).next();
gc();
