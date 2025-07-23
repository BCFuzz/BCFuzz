const o13 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const t4 = v7.Locale;
        t4.numeric = 1073741824;
        const v9 = v7.Locale;
        v9.calendar = "aWqBm";
        const v10 = new v9("aWqBm", v9);
        v10.minimize().maximize();
        return v9;
    },
};
const v14 = o13.n;
v14(o13, "aWqBm", v14);
gc();
