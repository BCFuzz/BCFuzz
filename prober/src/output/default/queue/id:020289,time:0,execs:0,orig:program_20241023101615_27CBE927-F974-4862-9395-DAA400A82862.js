function f1() {
    class C2 {
    }
    C2();
    return C2;
}
Int8Array.toString = f1;
const o12 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v10 = v8.Intl.Collator(Int8Array);
        let v11;
        try { v11 = v10.compare(a7, Int8Array); } catch (e) {}
        return v11;
    },
};
const t16 = o12.n;
t16();
gc();
