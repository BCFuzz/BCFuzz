for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
const v11 = `
    async function* f12(a13, a14) {
        const v15 = a13.match(a13);
        for (let i17 = 4096, i18 = 10;
            (() => {
                const v20 = (i17 < i18) || v15;
                !v20;
                return v20;
            })();
            ) {
        }
        return v11;
    }
    f12(v11);
`;
eval(v11).next(eval, v11, 4096, 4096);
gc();
