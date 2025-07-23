const o10 = {
    n(a1, a2, a3) {
        let v4;
        try { v4 = a2.n(); } catch (e) {}
        const v5 = this;
        const v7 = v5.Intl.NumberFormat;
        v7(v4, a2, v7, a2, this).formatToParts(v4);
        return this;
    },
};
const t10 = o10.n;
t10();
gc();
