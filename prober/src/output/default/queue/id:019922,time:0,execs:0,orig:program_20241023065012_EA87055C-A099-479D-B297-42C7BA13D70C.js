const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        for (let [i18, i19] = (() => {
                eval();
                return [0, 10];
            })();
            i18 < i19;
            i19--) {
        }
        return f1;
    }
    f1(v0, v0);
`;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
}
eval(v0).next();
gc();
