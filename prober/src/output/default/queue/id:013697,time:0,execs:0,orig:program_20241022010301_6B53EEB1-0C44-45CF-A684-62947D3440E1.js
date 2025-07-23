class C0 {
}
const v1 = new C0();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t6 = v6.Intl.RelativeTimeFormat;
        const v9 = new t6(a5, v6);
        return v9;
    },
};
const v11 = o10.n;
const v12 = v11(o10);
try { v12.formatToParts(v11, v1); } catch (e) {}
gc();
