const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.RelativeTimeFormat;
        const v8 = new t3();
        try { v8.formatToParts(-10, -10); } catch (e) {}
        return -10;
    },
};
const v11 = o10.n;
v11(o10, v11, -10);
gc();
