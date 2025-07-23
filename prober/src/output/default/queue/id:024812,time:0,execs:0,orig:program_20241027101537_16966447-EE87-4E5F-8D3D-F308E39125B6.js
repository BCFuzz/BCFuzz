function f0() {
    return f0;
}
class C3 extends f0 {
    ["codePointAt"] = "At";
}
const v4 = new C3();
const v5 = v4.codePointAt;
const o12 = {
    n(a7, a8, a9) {
        const v10 = this;
        return v10.Intl;
    },
};
const t14 = o12.n;
t14().Collator.supportedLocalesOf(v5);
gc();
