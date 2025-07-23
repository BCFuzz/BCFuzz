const o11 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.PluralRules;
        v7[Symbol.toPrimitive] = createGlobalObject;
        v7.type = v7;
        new v7(this, v7);
        return v6;
    },
};
const v12 = o11.n;
try { v12(); } catch (e) {}
gc();
