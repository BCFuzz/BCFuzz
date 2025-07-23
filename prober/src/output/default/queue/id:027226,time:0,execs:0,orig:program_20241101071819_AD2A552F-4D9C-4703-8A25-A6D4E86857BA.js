for (let i2 = -3, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 <= i17; i17--) {
            class C24 {
                static #o(a26) {
                }
                constructor(a28) {
                    a28.#o();
                }
            }
            new C24(C24);
        }
        return a12;
    }
    f11(v10, f11);
`;
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
    }
}
eval(v10).next();
gc();
