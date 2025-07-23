class C0 {
}
const v1 = new C0();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        v7.ignorePunctuation = v1;
        v7.Collator(v7, v7).compare();
        return C0;
    },
};
const t12 = o10.n;
t12();
gc();
