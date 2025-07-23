const o14 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v9 = v8.Intl;
        const v10 = v9.Locale;
        v10.firstDayOfWeek = a6;
        v10.numeric = -9223372036854775808;
        const v11 = v9.Locale;
        v11.numberingSystem = a6;
        Object.defineProperty(v11, "collation", { writable: true, configurable: true, enumerable: true, value: "toString" });
        const v12 = new v11("toString", v11);
        v12.minimize();
        return this;
    },
};
const t15 = o14.n;
t15(14, 127);
gc();
