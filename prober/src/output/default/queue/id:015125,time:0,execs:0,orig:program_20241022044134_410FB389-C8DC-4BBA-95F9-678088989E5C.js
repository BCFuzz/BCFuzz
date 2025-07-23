const o11 = {
    n(a2, a3, a4) {
        const v5 = this.DataView;
        Object.defineProperty(v5, "toString", { writable: true, enumerable: true, value: Symbol });
        const v6 = this;
        const v8 = v6.Intl.PluralRules;
        const v9 = new v8(Symbol, a2, a3, v8);
        try { v9.select(v5); } catch (e) {}
        return Symbol;
    },
};
const t11 = o11.n;
t11();
gc();
