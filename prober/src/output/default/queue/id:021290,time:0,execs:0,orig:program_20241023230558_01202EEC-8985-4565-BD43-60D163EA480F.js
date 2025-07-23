let v0 = 1.0;
v0++;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o21 = {
    n(a14, a15, a16) {
        const v17 = this;
        const v19 = v17.Intl.Locale;
        v19.firstDayOfWeek = v0;
        new v19("aWqBm", v19);
        return "aWqBm";
    },
};
const t13 = o21.n;
t13();
gc();
