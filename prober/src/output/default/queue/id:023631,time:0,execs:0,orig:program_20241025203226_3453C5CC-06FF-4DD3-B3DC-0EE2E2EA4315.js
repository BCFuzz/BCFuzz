const o12 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.Segmenter;
        const v9 = new ArrayBuffer(a4, ArrayBuffer);
        v9.minimumSignificantDigits = 7;
        const v10 = v6.PluralRules;
        new v10(v7, v9);
        return v10;
    },
};
const v13 = o12.n;
v13(o12, v13);
gc();
