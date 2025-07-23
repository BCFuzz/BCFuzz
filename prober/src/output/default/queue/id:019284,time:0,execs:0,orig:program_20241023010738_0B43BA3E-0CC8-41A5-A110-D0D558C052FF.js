const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.NumberFormat;
        const v8 = t3();
        v8.valueOf = Symbol;
        try { v8.formatToParts(v8); } catch (e) {}
        return v5;
    },
};
const v11 = o10.n;
v11(v11, v11);
gc();
