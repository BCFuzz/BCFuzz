const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.NumberFormat;
        v6(a3, v4, v6).formatToParts(v4);
        return a1;
    },
};
const t8 = o9.n;
t8();
gc();
