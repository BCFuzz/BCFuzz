const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        v5.PluralRules.supportedLocalesOf();
        const t4 = v5.RelativeTimeFormat;
        const v9 = new t4(a3);
        let v10;
        try { v10 = v9.formatToParts(); } catch (e) {}
        return v10;
    },
};
const t12 = o11.n;
t12();
gc();
