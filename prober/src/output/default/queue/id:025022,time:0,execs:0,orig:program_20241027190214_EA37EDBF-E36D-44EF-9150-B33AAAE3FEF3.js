const v0 = /(ab|cde)/myisu;
const o1 = {
    __proto__: v0,
};
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.Locale;
        v9.numberingSystem = a5;
        new v9("aWqBm", v9);
        return v0;
    },
};
const v12 = o11.n;
try { v12(o1, o1); } catch (e) {}
gc();
