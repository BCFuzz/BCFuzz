for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = `
    async function* f12(a13, a14) {
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        const v26 = JSON.stringify(v11);
        for (let [i30, i31] = (() => {
                runString(v26);
                return [0, 10];
            })();
            i31--, i30 < i31;
            ) {
        }
        return JSON;
    }
    f12(f12, f12);
`;
eval(v11).next();
gc();
