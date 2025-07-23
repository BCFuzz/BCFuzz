const v2 = new Int32Array(1000);
const v3 = v2.toLocaleString(1000, v2);
class C4 {
}
C4.localeMatcher = v3;
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v11 = v9.Intl.DisplayNames;
        try { new v11(C4, C4); } catch (e) {}
        return v9;
    },
};
const v14 = o13.n;
v14(v14, v3, v14);
gc();
