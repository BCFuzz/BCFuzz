const o12 = {
    n(a2, a3, a4) {
        const v5 = a3--;
        const v6 = this;
        const v7 = v6.Intl;
        const t5 = v7.Locale;
        t5.firstDayOfWeek = a3;
        const v9 = v7.Locale;
        v9.language = v5;
        const v10 = new v9("toString", v9);
        v10.maximize();
        return a4;
    },
};
const t14 = o12.n;
t14();
gc();
