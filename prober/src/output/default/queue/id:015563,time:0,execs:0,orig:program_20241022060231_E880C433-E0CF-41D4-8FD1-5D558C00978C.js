const v1 = Symbol.toPrimitive;
const o9 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        try { v7.supportedValuesOf(v1); } catch (e) {}
        return Symbol;
    },
};
const t9 = o9.n;
t9();
gc();
