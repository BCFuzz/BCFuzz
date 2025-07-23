const v0 = [];
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 10;
        i10 < i11;
        (() => {
            const v15 = i11--;
            const o25 = {
                n(a17, a18, a19) {
                    const v20 = this;
                    const v22 = v20.Intl.DateTimeFormat();
                    v22.formatRangeToParts(v15, v0);
                    v22.formatRange(a7, i10);
                    return v15;
                },
            };
            const t10 = o25.n;
            t10(o25, F2);
        })()) {
    }
}
new F2(8, v0, v0, v0);
gc();
