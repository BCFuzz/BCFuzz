class C0 {
}
const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        v6.style = a2;
        const v7 = v6.RelativeTimeFormat;
        const v8 = new v7(v7, v6);
        return v8;
    },
};
const v10 = o9.n;
try { v10(C0); } catch (e) {}
gc();
