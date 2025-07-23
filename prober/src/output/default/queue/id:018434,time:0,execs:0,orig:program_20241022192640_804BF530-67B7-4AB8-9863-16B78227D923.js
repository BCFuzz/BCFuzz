for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const o25 = {
        n(a17, a18, a19) {
            const v20 = this;
            const t7 = v20.Intl.NumberFormat;
            return t7(a12).constructor(a14, this, a14);
        },
    };
    const t11 = o25.n;
    const v28 = t11().formatToParts;
    try { v28(); } catch (e) {}
}
new F10(F10, F10, F10, F10);
gc();
