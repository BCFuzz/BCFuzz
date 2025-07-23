const v1 = new Uint16Array();
const o13 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.Locale;
        v9.numberingSystem = a5;
        const v10 = new v9("aWqBm", v9);
        return v10.minimize().numberingSystem;
    },
};
const t10 = o13.n;
t10(v1, "aWqBm");
gc();
