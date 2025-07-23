const o12 = {
    n(a2, a3, a4) {
        const v5 = a3--;
        const v6 = this;
        const v8 = v6.Intl.Locale;
        v8.language = v5;
        const v9 = new v8("toString", v8);
        return v9.maximize().getTimeZones();
    },
};
const v13 = o12.n;
v13(v13, v13);
gc();
