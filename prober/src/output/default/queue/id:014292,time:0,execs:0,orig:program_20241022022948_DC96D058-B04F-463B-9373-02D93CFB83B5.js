const o12 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        v6.PluralRules.supportedLocalesOf();
        const t4 = v6.RelativeTimeFormat;
        const v10 = new t4();
        try { v10.formatToParts(-12342); } catch (e) {}
        return v5;
    },
};
const t11 = o12.n;
t11();
gc();
