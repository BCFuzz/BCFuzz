const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.PluralRules;
        v6.minimumSignificantDigits = v4;
        new v6(this, v6);
        return this;
    },
};
const v9 = o8.n;
try { v9(); } catch (e) {}
gc();
