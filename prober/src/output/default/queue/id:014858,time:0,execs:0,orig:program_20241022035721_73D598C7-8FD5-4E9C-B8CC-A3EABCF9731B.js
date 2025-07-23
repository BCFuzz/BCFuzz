class C0 {
}
const v1 = new C0();
Math.type = v1;
const v3 = Math.sign(Math);
const o12 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v10 = v8.Intl.DisplayNames;
        try { new v10(v3, Math); } catch (e) {}
        return v3;
    },
};
const v13 = o12.n;
v13(v13);
gc();
