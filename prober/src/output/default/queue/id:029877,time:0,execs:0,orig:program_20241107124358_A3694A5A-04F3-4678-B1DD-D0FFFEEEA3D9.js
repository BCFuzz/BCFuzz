for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = `
    async function* f12(a13, a14) {
        for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
        }
        /.[a[^R\u{12345}]*]/dyvi;
        const v27 = JSON.stringify(v11);
        for (let [i31, i32] = (() => {
                runString(v27);
                return [0, 10];
            })();
            i32--, i31 < i32;
            ) {
        }
        return runString;
    }
    f12();
`;
eval(v11).next();
gc();
