const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t3 = v6.Intl.PluralRules;
        new t3(Symbol, a3);
        return Symbol;
    },
};
const v11 = o10.n;
try { v11(null); } catch (e) {}
gc();
