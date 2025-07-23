const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.RelativeTimeFormat;
        const v7 = new t3();
        const v8 = v7.formatToParts;
        try { v8(); } catch (e) {}
        return v7;
    },
};
const t10 = o10.n;
t10();
gc();
