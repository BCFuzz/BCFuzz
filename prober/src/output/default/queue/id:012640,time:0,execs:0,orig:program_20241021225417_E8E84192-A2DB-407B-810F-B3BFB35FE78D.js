class C0 {
}
const v1 = new C0();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t6 = v6.Intl.Locale;
        new t6(v1);
        return this;
    },
};
const v11 = o10.n;
try { v11(v11, v1); } catch (e) {}
gc();
