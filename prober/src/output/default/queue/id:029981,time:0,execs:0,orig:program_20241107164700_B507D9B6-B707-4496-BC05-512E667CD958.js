const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            !(i6 === i7);
            (() => {
                i7--;
                for (let i15 = 0, i16 = 10; i15 !== i16; i16--) {
                }
            })()) {
            for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
            }
        }
        return a2;
    }
    f1();
`;
eval(v0).next();
gc();
