const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.PluralRules;
        v7.roundingIncrement = 5;
        new v7(this, v7);
        return v5;
    },
};
const t9 = o9.n;
t9();
gc();
