const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const t4 = v7.Locale;
        t4.numeric = 1073741824;
        const v9 = v7.Locale;
        Object.defineProperty(v9, "collation", { writable: true, configurable: true, enumerable: true, value: "aWqBm" });
        v9.calendar = "aWqBm";
        const v10 = new v9("aWqBm", v9);
        return v10.minimize("aWqBm", v9, 1073741824, "aWqBm");
    },
};
const t13 = o12.n;
t13(o12, "aWqBm");
gc();
