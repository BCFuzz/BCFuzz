const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 === i7;) {
            for (let i15 = 0, i16 = 10; i15 < i16;) {
            }
            for (let v22 = 0; v22 < 5; v22++) {
                class C24 extends String {
                }
            }
        }
    }
    f1();
`;
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
    for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    }
}
eval(v0).next();
gc();
