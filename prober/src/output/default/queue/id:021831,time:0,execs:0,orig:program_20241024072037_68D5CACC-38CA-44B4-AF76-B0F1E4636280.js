function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o20 = {
    n(a13, a14, a15) {
        const v16 = this;
        const v18 = v16.Intl.Locale;
        v18.calendar = f0;
        try { new v18("split", v18); } catch (e) {}
        return v16;
    },
};
const t14 = o20.n;
t14();
gc();
