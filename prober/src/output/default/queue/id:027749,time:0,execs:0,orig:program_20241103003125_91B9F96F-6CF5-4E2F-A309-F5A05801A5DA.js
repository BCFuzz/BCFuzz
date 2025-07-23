const v0 = [3];
const o13 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.Segmenter;
        const v10 = new ArrayBuffer(a5, v0);
        v10.minimumFractionDigits = v0;
        v10.maximumFractionDigits = 5.0;
        const t9 = v7.PluralRules;
        const v12 = new t9(v8, v10);
        return v12;
    },
};
const t14 = o13.n;
t14();
gc();
