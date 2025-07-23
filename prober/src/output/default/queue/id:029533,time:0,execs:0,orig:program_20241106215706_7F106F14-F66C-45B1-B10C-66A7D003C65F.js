let v1 = 5;
v1--;
const v3 = v1++;
const v4 = v1++;
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v11 = v9.Intl.PluralRules;
        v11.maximumSignificantDigits = 1;
        v11.minimumIntegerDigits = v1;
        new v11(this, v11);
        return a8;
    },
};
const t14 = o13.n;
t14(v1, v1, v3, v4);
gc();
