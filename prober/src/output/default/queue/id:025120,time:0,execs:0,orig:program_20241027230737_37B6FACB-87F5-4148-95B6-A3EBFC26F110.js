const o11 = {
    n(a2, a3, a4) {
        a3--;
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.Locale;
        v8.collation = a3;
        v8.firstDayOfWeek = a3;
        const v9 = v7.Locale;
        const v10 = new v9("toString", v9);
        return v10;
    },
};
const t13 = o11.n;
t13();
gc();
