const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.RelativeTimeFormat;
        try { v6.call(v4, this, a1, a3); } catch (e) {}
        return a2;
    },
};
const t8 = o8.n;
t8();
gc();
