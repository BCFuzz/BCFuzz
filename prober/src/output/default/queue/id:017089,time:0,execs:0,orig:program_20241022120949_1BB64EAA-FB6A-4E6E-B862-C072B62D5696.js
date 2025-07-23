const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.NumberFormat;
        v6(a3, v6, a1).formatToParts();
        return v4;
    },
};
const v10 = o9.n;
v10(v10, v10, o9);
gc();
