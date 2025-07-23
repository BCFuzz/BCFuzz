const v0 = [];
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 10;
        i10 < i11;
        (() => {
            i11--;
            const o24 = {
                n(a17, a18, a19) {
                    const v20 = this;
                    v20.Intl.DateTimeFormat().formatRange(a7, i10);
                    return this;
                },
            };
            const v25 = o24.n;
            try { v25(); } catch (e) {}
        })()) {
    }
}
const v29 = new F2(8, v0, v0, v0);
const t20 = v29.constructor;
new t20(8, v29, v0, 8);
gc();
