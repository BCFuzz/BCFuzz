const o7 = {
    n(a1, a2, a3) {
        const v4 = this;
        return v4.Intl.Locale;
    },
};
const t6 = o7.n;
const v9 = t6();
const o10 = {
};
const v12 = new Proxy(v9, o10);
try { new v12(o10); } catch (e) {}
gc();
