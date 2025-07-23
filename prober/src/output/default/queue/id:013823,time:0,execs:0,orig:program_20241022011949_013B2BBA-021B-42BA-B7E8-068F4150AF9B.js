const o9 = {
    n(a1, a2, a3) {
        gc();
        const v6 = this;
        const v7 = v6.Intl;
        try { v7.PluralRules(); } catch (e) {}
        return a1;
    },
};
const v10 = o9.n;
v10(o9, v10, v10);
gc();
