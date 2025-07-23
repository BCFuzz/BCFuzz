const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.Locale;
        v8.firstDayOfWeek = a4;
        v8.numeric = -9223372036854775808;
        const v9 = v7.Locale;
        v9.numberingSystem = a4;
        Object.defineProperty(v9, "collation", { writable: true, configurable: true, enumerable: true, value: "toString" });
        v9.calendar = "toString";
        const v10 = new v9("toString", v9);
        v10.minimize();
        return a4;
    },
};
const t16 = o12.n;
t16(o12, "toString");
gc();
