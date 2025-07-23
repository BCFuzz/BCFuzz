const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.NumberFormat;
        const v8 = v6().resolvedOptions;
        try { v8(v5, v6, v6, v6, v4); } catch (e) {}
        return v4;
    },
};
const v11 = o10.n;
v11(v11, o10, v11, v11);
gc();
