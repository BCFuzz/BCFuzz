const o11 = {
    n(a2, a3, a4) {
        const v5 = a3--;
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.Locale;
        v8.calendar = v5;
        const v9 = v7.Locale;
        v9.numberingSystem = a3;
        new v9("toString", v9);
        return v8;
    },
};
const t13 = o11.n;
t13();
gc();
