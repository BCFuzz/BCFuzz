const o11 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.Locale;
        Object.defineProperty(v7, "collation", { writable: true, configurable: true, enumerable: true, value: "toString" });
        const v8 = new v7("toString", v7);
        v8.minimize(a4, a4, a3, "toString", v8).collation;
        return "toString";
    },
};
const v12 = o11.n;
v12("toString", v12, "toString", v12, o11);
gc();
