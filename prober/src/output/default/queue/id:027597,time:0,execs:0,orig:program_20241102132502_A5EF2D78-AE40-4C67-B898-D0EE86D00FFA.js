const o13 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.Intl;
        const t4 = v8.Locale;
        t4.numeric = 1073741824;
        const v10 = v8.Locale;
        v10.region = 129n;
        const v11 = new v10("aWqBm", v10);
        return v11.minimize();
    },
};
const t12 = o13.n;
const v15 = t12();
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    class C27 extends Date {
    }
    const v28 = new C27();
    v28.toLocaleTimeString(v15);
}
gc();
