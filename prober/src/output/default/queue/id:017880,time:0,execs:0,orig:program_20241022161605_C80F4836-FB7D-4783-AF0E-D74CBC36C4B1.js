function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o15 = {
        n(a6, a7, a8) {
            const v9 = this;
            const t5 = v9.Intl.Locale;
            const v12 = new t5("aWqBm");
            v12.minimize().getCalendars();
            return F0;
        },
    };
    const t11 = o15.n;
    t11();
}
new F0(F0, F0);
gc();
