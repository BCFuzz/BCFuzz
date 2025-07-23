const v0 = [1000.0,1000000.0,-1.6050129888182614e+308,3.9225440232465285,-1.0];
const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.PluralRules;
        v7.trailingZeroDisplay = v0;
        const v8 = new v7(this, v7);
        return v8;
    },
};
const v10 = o9.n;
try { v10(); } catch (e) {}
gc();
