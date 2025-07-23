let v1 = 116 - 116;
const v2 = v1++;
const o15 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.Intl;
        const v9 = v8.Segmenter;
        const v11 = new ArrayBuffer(116, v7);
        v11.minimumSignificantDigits = v1;
        const t9 = v8.PluralRules;
        const v13 = new t9(v9, v11);
        v13.resolvedOptions(v2, v11, v2);
        return v8;
    },
};
const t15 = o15.n;
t15();
gc();
