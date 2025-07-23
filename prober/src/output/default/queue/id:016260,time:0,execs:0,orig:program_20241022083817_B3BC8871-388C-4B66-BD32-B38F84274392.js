const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.PluralRules;
        const v7 = new v6(this, v6, a2);
        const v8 = v7.select;
        v8(a1, v7, v8);
        return a1;
    },
};
const v11 = o10.n;
try { v11(); } catch (e) {}
gc();
