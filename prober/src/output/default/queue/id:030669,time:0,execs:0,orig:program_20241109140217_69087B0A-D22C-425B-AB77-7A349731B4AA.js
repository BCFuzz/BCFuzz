const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        }
        for (let [i26, i27] = (() => {
                for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                }
                return [0, 10];
            })();
            i26 < i27;
            i27--) {
        }
        try { RegExp.call(9, ...RegExp); } catch (e) {}
        for (let i40 = 0, i41 = 10 + 10; i41--, i40 < i41;) {
        }
        return v0;
    }
    f1(v0, f1);
`;
eval(v0).next(eval, eval);
gc();
