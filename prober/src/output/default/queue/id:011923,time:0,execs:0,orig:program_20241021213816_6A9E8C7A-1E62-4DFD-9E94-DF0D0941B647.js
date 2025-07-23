const o12 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.Segmenter;
        try { v6(v4, a1, v5, v5, a2); } catch (e) {}
        new v6();
        const t7 = v5.PluralRules;
        const v10 = new t7(v6);
        return v10.resolvedOptions();
    },
};
const t12 = o12.n;
t12();
gc();
