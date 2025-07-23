class C0 {
}
const v1 = C0.__defineSetter__;
class C2 {
}
const v3 = C2[4096];
const o16 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v9 = v8.parseFloat();
        const v10 = v8.Intl;
        v10.PluralRules.supportedLocalesOf(v3);
        const t11 = v10.RelativeTimeFormat;
        const v14 = new t11(a5);
        try { v14.format(v1, v9); } catch (e) {}
        return a5;
    },
};
const v17 = o16.n;
v17(v17, C2, v3);
gc();
