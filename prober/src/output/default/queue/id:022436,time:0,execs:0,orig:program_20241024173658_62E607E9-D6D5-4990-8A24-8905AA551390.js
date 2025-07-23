const o28 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        v6.numeric = 257;
        const v7 = v6.Collator(v6, v6);
        for (let i10 = -3, i11 = 10;
            (() => {
                const v12 = i10 < i11;
                for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
                }
                return v12;
            })();
            i11--) {
        }
        return v7;
    },
};
const v29 = o28.n;
v29(v29, o28);
gc();
