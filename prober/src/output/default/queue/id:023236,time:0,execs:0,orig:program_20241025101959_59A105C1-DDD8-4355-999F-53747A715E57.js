const o11 = {
    n(a2, a3, a4) {
        a3--;
        const v6 = this;
        const v7 = v6.Intl;
        const t5 = v7.Locale;
        t5.firstDayOfWeek = a3;
        const v9 = v7.Locale;
        v9.numberingSystem = a3;
        new v9("toString", v9);
        return a2;
    },
};
const t13 = o11.n;
t13();
gc();
