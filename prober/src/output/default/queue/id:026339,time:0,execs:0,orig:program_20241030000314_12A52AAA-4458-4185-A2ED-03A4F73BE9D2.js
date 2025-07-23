const o11 = {
    n(a2, a3, a4) {
        const v5 = a3--;
        const v6 = this;
        const v8 = v6.Intl.Locale;
        v8.language = v5;
        const v9 = new v8("toString", v8);
        v9.getCalendars(v9);
        return v9;
    },
};
const t11 = o11.n;
t11();
gc();
