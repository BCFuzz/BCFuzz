class C0 {
}
const v1 = new C0();
const v2 = v1.toLocaleString(v1);
const o10 = {
    n(a4, a5, a6) {
        const v7 = this;
        return v7.Intl.Collator();
    },
};
const t10 = o10.n;
const t11 = t10().compare.bind();
t11(v2);
gc();
