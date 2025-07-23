class C0 {
}
const v1 = new C0();
const v2 = v1.toLocaleString();
const o12 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.Intl;
        try { v8.supportedValuesOf(v2); } catch (e) {}
        const t9 = v8.RelativeTimeFormat;
        const v11 = new t9();
        return v11;
    },
};
const t14 = o12.n;
const v14 = t14();
try { v14.format(v1, v1); } catch (e) {}
gc();
