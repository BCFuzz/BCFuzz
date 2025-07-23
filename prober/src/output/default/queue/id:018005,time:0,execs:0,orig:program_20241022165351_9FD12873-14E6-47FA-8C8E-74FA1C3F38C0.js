const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.PluralRules;
        v7.roundingMode = -1533298333n;
        const v8 = new v7(this, v7);
        return v8;
    },
};
const v10 = o9.n;
try { v10(-1533298333n, -1533298333n, v10, -1533298333n, o9); } catch (e) {}
gc();
