for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
    async function* f12(a13, a14) {
        for (let i17 = 0, i18 = 10;
            i17 <= i18;
            (() => {
                yield* f12();
            })()) {
        }
        return a13;
    }
`;
eval(v10);
gc();
