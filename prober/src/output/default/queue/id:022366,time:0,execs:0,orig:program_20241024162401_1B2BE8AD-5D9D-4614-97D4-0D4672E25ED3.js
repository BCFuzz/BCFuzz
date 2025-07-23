const o11 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.Locale;
        Object.defineProperty(v7, "collation", { writable: true, configurable: true, enumerable: true, value: "aWqBm" });
        const v8 = new v7("aWqBm", v7);
        const v9 = v8.minimize();
        v9.getCollations("aWqBm", "aWqBm", v9);
        return "aWqBm";
    },
};
const t11 = o11.n;
t11();
gc();
