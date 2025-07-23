createGlobalObject.minimumFractionDigits = 16;
const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        Reflect.construct(v7.PluralRules, [createGlobalObject,createGlobalObject]);
        return v7;
    },
};
const v13 = o12.n;
v13(v13);
gc();
