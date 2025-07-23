function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o14 = {
        n(a7, a8, a9) {
            const v10 = this;
            const v12 = v10.Intl.DateTimeFormat(a7, a9, a9, v10);
            try { v12.formatToParts(v12); } catch (e) {}
            return v12;
        },
    };
    const t10 = o14.n;
    t10(F0);
}
new F0(F0, F0, F0, F0);
gc();
