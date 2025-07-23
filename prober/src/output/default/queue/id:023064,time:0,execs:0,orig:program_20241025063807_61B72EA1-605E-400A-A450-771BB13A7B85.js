const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        for (let i17 = 0, i18 = 10; i17 < "m";) {
        }
        return a3;
    }
    f2();
`;
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
    for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
    }
}
eval(v1).next();
gc();
