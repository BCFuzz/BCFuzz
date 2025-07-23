const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const t4 = v7.Locale;
        t4.numeric = 1073741824;
        const v9 = v7.Locale;
        const v10 = new v9("string", v9);
        v10.minimize();
        return v9;
    },
};
const v13 = o12.n;
v13(o12, v13, v13, v13);
gc();
