const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.DateTimeFormat;
        const t4 = t3(a2).resolvedOptions;
        t4();
        return a1;
    },
};
const v11 = o10.n;
try { v11(v11, o10); } catch (e) {}
gc();
