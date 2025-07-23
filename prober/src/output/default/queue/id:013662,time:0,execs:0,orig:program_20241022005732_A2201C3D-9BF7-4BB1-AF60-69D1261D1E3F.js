const o7 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        try { v5.PluralRules(v5, this, this); } catch (e) {}
        return this;
    },
};
const t8 = o7.n;
t8();
gc();
