const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.DateTimeFormat;
        return v7(a4, a3, v6, v7).formatRangeToParts(6, 6);
    },
};
const t8 = o10.n;
t8();
gc();
