const v0 = `
    async function* f1(a2, a3) {
        for (let [i8, i9] = (() => {
                0 !== 0 ? 0 : 0;
                return [0, 5];
            })();
            i8 < i9;
            i9--) {
        }
        return a2;
    }
    f1();
`;
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
    for (let i29 = 2, i30 = 10; i29 != i30; i30--) {
    }
}
eval(v0).next();
gc();
