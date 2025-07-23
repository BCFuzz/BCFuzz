class C0 {
}
const v1 = new C0();
const v3 = 64n | 64n;
const o15 = {
    n(a6, a7, a8) {
        const v9 = this;
        const t7 = v9.Intl.NumberFormat;
        const v13 = t7(a6, v9, v9, v1).resolvedOptions;
        try { v13.call(a8); } catch (e) {}
        return a6;
    },
};
const v16 = o15.n;
const t14 = v16(v16);
t14(v1, -682555530n, v3);
gc();
