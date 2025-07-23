const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.NumberFormat;
        const v8 = t3(a3, a1, v4, a1, v4).resolvedOptions;
        try { v8.call(a3); } catch (e) {}
        return a1;
    },
};
const v11 = o10.n;
v11(v11, o10, v11);
gc();
