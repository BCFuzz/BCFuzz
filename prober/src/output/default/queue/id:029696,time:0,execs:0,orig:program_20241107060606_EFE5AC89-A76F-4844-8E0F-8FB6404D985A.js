let v1 = 8;
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.PluralRules;
        Object.defineProperty(v9, "minimumFractionDigits", { writable: true, value: v1 });
        v9.roundingIncrement = 10;
        new v9(this, v9);
        return 10;
    },
};
for (let i15 = 0, i16 = 10; i16--, 8 < i16;) {
}
v1 = 89;
const t13 = o11.n;
t13();
for (let i27 = -3, i28 = 10; i28--, i27 < i28;) {
}
gc();
