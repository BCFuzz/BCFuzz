class C1 {
}
C1.style = "5";
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.DisplayNames;
        let v9;
        try { v9 = new v8(C1, C1); } catch (e) {}
        return v9;
    },
};
const t12 = o10.n;
t12();
gc();
