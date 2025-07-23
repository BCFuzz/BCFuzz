for (let v0 = 0; v0 < 5; v0++) {
    const o12 = {
        n(a3, a4, a5) {
            const v6 = this;
            const v7 = v6.Intl;
            const v8 = v7.Locale;
            Object.defineProperty(v8, "collation", { writable: true, configurable: true, enumerable: true, value: "aWqBm" });
            const v9 = new v8("aWqBm", v8);
            const v10 = v9.minimize();
            v10.getCollations(v10);
            return v7;
        },
    };
    const t13 = o12.n;
    t13();
}
gc();
