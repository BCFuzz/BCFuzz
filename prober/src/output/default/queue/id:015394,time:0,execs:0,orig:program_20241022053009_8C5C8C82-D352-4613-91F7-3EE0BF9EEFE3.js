class C1 extends Int32Array {
}
const v2 = new C1();
const o12 = {
    n(a4, a5, a6) {
        const v7 = this;
        const t6 = v7.Intl.Segmenter;
        const v10 = new t6();
        v10.segment(v2);
        return v10;
    },
};
const v13 = o12.n;
v13(v13);
gc();
