const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.DateTimeFormat;
        const v8 = t3(a3).resolvedOptions;
        v8.apply(v8);
        return v4;
    },
};
const v11 = o10.n;
try { v11(); } catch (e) {}
gc();
