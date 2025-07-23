const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.DateTimeFormat;
        const v7 = v6.prototype;
        return v7.resolvedOptions(a2, v5, a3, v6, v7);
    },
};
const v10 = o9.n;
try { v10(); } catch (e) {}
gc();
