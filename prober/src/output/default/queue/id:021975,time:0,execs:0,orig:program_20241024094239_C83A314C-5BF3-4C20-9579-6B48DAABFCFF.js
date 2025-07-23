function f0() {
    return f0;
}
f0[Symbol.toPrimitive] = f0;
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const o22 = {
    n(a15, a16, a17) {
        const v18 = this;
        const v20 = v18.Intl.Locale;
        v20.calendar = f0;
        try { new v20("split", v20); } catch (e) {}
        return a17;
    },
};
const t15 = o22.n;
t15();
gc();
