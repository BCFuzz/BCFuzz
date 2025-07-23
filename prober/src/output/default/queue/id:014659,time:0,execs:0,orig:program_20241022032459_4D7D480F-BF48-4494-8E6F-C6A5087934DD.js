class C0 {
    toString(a2, a3, a4) {
        a3[4] = a2;
    }
}
const v5 = new C0();
const o16 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t9 = v10.Intl.Segmenter;
        const v13 = new t9();
        const v14 = v13.segment();
        try { v14.containing(v5); } catch (e) {}
        return this;
    },
};
const v17 = o16.n;
v17(C0, v17);
gc();
