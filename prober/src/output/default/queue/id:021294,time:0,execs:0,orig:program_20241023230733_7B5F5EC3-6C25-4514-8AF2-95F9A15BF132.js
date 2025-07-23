for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o20 = {
    n(a13, a14, a15) {
        const v16 = this;
        const v18 = v16.Intl.Locale;
        v18.collation = 3.0;
        let v19;
        try { v19 = new v18("split", v18); } catch (e) {}
        return v19;
    },
};
const t12 = o20.n;
t12("split");
gc();
