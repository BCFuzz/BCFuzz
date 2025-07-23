let v0 = 5;
v0++;
v0++;
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.PluralRules;
        v9.minimumIntegerDigits = v0;
        const v10 = new v9(this, v9);
        return v10;
    },
};
const t12 = o11.n;
t12();
gc();
