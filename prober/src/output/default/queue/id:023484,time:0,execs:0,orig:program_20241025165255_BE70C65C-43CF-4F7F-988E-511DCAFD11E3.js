let v1 = 116 - 116;
v1++;
const o14 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.Intl;
        const v9 = v8.Segmenter;
        const v11 = new ArrayBuffer();
        v11.minimumSignificantDigits = v1;
        const t9 = v8.PluralRules;
        new t9(v9, v11);
        return a4;
    },
};
const t14 = o14.n;
t14();
gc();
