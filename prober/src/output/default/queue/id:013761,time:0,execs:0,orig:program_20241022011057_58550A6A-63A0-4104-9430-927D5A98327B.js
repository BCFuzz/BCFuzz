class C1 {
}
const v2 = new C1();
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const t6 = v7.Intl.Locale;
        new t6(a5, Float32Array);
        return this;
    },
};
const v12 = o11.n;
try { v12(v12, v2); } catch (e) {}
gc();
