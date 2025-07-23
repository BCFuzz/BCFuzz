const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.Segmenter;
        const v8 = new ArrayBuffer(v6, v4);
        const t6 = v5.PluralRules;
        new t6(v6, v8);
        return a3;
    },
};
const t11 = o11.n;
t11();
gc();
