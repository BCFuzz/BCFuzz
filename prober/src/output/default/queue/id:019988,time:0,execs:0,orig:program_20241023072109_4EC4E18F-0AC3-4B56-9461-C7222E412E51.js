const v0 = `
    async function* f1(a2, a3) {
        for (let [i7, i8] = (() => {
                typeof 0;
                return [0, 10];
            })();
            i7 < i8;
            i8--) {
        }
        return a2;
    }
    f1(v0, v0);
`;
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
    }
}
eval(v0).next();
gc();
