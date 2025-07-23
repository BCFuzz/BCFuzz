const v1 = Date();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.Locale;
        try { new v8(v1); } catch (e) {}
        return Date;
    },
};
const t9 = o10.n;
t9();
gc();
