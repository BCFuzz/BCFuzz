const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.PluralRules;
        v7.localeMatcher = 1264;
        new v7(this, v7);
        return v7;
    },
};
const v10 = o9.n;
try { v10(); } catch (e) {}
gc();
