for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10;
            i16 !== i17;
            (() => {
                i17--;
                switch (false) {
                    case 8:
                        break;
                }
            })()) {
        }
        return f11;
    }
    f11(v10, v10);
`;
eval(v10).next(v10, eval);
gc();
