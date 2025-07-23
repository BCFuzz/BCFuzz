const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.RelativeTimeFormat;
        const v8 = new t3();
        try { v8.formatToParts(a3, "m"); } catch (e) {}
        return v5;
    },
};
const t9 = o10.n;
t9();
gc();
