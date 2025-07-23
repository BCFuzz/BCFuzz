const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.DateTimeFormat;
        return t3();
    },
};
const t7 = o8.n;
const v10 = t7();
try { v10.format(); } catch (e) {}
gc();
