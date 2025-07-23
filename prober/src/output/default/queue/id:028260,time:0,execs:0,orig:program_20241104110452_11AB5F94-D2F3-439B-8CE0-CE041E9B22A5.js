const o10 = {
    n(a2, a3, a4) {
        a2.maximumSignificantDigits = 12;
        const v5 = this;
        const t4 = v5.Intl.NumberFormat;
        const v8 = t4(a4, a2);
        v8.resolvedOptions(v8);
        return a2;
    },
};
const v11 = o10.n;
v11(v11);
gc();
