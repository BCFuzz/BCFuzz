class C0 {
}
const v1 = new C0();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.PluralRules;
        v8.roundingPriority = v1;
        new v8(this, v8);
        return v8;
    },
};
const v11 = o10.n;
try { v11(v1, v11, v11); } catch (e) {}
gc();
