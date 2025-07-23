const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.RelativeTimeFormat;
        const v7 = new v6(v6, v5, a2, a3, v6);
        return v7;
    },
};
const t9 = o8.n;
t9().resolvedOptions();
gc();
