const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.Locale;
        v8.numberingSystem = a4;
        const v9 = new v8("aWqBm", v8);
        return v9.minimize();
    },
};
const v12 = o11.n;
const v13 = v12(o11, "aWqBm");
try { v12(Uint16Array, v13); } catch (e) {}
gc();
