const v0 = [];
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 16;
        i10 < i11;
        (() => {
            const v15 = i11--;
            const o24 = {
                n(a17, a18, a19) {
                    const v20 = this;
                    const v21 = v20.Intl;
                    v21.DateTimeFormat(a6, v21, 9007199254740990, this, v21).formatRange(a7, i10);
                    return v15;
                },
            };
            const v25 = o24.n;
            try { v25(v15, v0); } catch (e) {}
        })()) {
    }
}
const v29 = new F2();
const t21 = v29.constructor;
new t21(9007199254740990, v29, v0, 9007199254740990);
gc();
