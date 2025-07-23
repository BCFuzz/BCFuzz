const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.PluralRules;
        v7.roundingIncrement = 1024;
        new v7(this, v7);
        return v6;
    },
};
const v10 = o9.n;
try { v10(o9, 1024, o9); } catch (e) {}
gc();
