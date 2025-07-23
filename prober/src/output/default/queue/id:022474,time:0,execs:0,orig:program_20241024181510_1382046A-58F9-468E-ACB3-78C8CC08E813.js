const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.Locale;
        v8.firstDayOfWeek = a4;
        v8.numeric = 1073741824;
        const v9 = v7.Locale;
        v9.numberingSystem = a4;
        Object.defineProperty(v9, "collation", { writable: true, configurable: true, enumerable: true, value: "aWqBm" });
        v9.calendar = "aWqBm";
        const v10 = new v9("aWqBm", v9);
        v10.minimize();
        return "aWqBm";
    },
};
const t16 = o12.n;
t16(o12, "aWqBm");
gc();
