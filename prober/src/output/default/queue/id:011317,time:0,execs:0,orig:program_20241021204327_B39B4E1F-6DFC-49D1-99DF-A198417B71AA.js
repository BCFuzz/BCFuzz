const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const t4 = v5.PluralRules;
        const v7 = new t4(v5);
        v7.select(a2);
        return this;
    },
};
const t10 = o9.n;
t10();
gc();
