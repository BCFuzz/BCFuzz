const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                const v8 = i6 < i7;
                [2011326637,,];
                return v8;
            })();
            i7--) {
            for (let i19 = 10, i20 = 10; -13369 !== i20; i20--) {
            }
        }
        return v0;
    }
    f1(v0, v0);
`;
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
    }
}
eval(v0).next();
gc();
