const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            !(i6 > i7);
            (() => {
                i7--;
                for (let i15 = 0, i16 = 10; i15 !== i16; i16--) {
                }
            })()) {
        }
        return a3;
    }
    f1(v0, f1);
`;
eval(v0).next();
gc();
