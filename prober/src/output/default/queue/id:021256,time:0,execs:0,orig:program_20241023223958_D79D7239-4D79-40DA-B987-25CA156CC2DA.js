function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o10 = {
        n(a3, a4, a5) {
            const v6 = this;
            v6.Intl.Collator.supportedLocalesOf();
            return v6;
        },
    };
    const t9 = o10.n;
    t9();
}
new F0();
gc();
