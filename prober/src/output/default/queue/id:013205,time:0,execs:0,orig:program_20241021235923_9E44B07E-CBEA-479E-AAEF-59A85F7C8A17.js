const v1 = 253 ^ 253;
const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t4 = v6.Intl.PluralRules;
        const v9 = new t4(v1, a3, a3);
        v9.select(v1);
        return v1;
    },
};
const t10 = o11.n;
t10();
gc();
