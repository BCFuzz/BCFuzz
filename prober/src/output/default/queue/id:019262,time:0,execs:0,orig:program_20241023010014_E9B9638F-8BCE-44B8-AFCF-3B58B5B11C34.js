for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o22 = {
    n(a13, a14, a15) {
        const v16 = this;
        const v17 = v16.Intl;
        const v18 = v17.Locale;
        v18.numeric = 1073741824;
        const v19 = v17.Locale;
        const v20 = new v19("aWqBm", v19);
        v20.numeric;
        return v18;
    },
};
const t14 = o22.n;
t14();
gc();
