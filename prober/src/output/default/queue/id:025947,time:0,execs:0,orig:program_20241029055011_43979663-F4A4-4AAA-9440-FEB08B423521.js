const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const t4 = v7.Locale;
        t4.numeric = 1073741824;
        const v9 = v7.Locale;
        v9.numberingSystem = a4;
        Object.defineProperty(v9, "collation", { writable: true, configurable: true, enumerable: true, value: "aWqBm" });
        const v10 = new v9("aWqBm", v9);
        return v10.minimize();
    },
};
const t13 = o12.n;
const v14 = t13(o12, "aWqBm");
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    class C26 extends Date {
    }
    const v27 = new C26();
    v27.toLocaleTimeString(v14);
}
gc();
