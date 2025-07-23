const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.PluralRules;
        Object.defineProperty(v8, "minimumFractionDigits", { writable: true, value: 8 });
        v8.roundingIncrement = 10;
        new v8(this, v8);
        return 10;
    },
};
for (let i14 = 0, i15 = 10; i15--, 8 < i15;) {
}
const t12 = o10.n;
t12();
for (let i26 = -3, i27 = 10; i27--, i26 < i27;) {
}
gc();
