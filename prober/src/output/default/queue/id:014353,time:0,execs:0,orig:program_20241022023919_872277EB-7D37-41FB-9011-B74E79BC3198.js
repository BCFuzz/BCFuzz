class C1 {
}
const v2 = new C1();
v2[Symbol.toStringTag] = "object";
const v5 = v2.toLocaleString(C1);
const o13 = {
    n(a7, a8, a9) {
        const v10 = this;
        const v11 = v10.Intl;
        let v12;
        try { v12 = v11.supportedValuesOf(v5); } catch (e) {}
        return v12;
    },
};
const v14 = o13.n;
v14(v5, v14, v14);
gc();
