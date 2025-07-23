const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.PluralRules;
        v7.roundingIncrement = 10;
        new v7(this, v7);
        return v6;
    },
};
const t10 = o9.n;
t10();
for (let i14 = -3, i15 = 10; i15--, i14 < i15;) {
}
gc();
