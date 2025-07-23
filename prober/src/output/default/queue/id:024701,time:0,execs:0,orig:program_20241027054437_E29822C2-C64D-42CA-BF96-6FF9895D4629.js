const o12 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.Segmenter;
        const v9 = new ArrayBuffer();
        v9.maximumFractionDigits = 5.0;
        const t7 = v6.PluralRules;
        new t7(v7, v9);
        return this;
    },
};
const t12 = o12.n;
t12();
gc();
