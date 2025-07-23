function f0(a1, a2) {
    const v3 = [-1083304700];
    const o13 = {
        n(a5, a6, a7) {
            const v8 = this;
            const t5 = v8.Intl.NumberFormat;
            t5().formatToParts(v3);
            return a2;
        },
    };
    const t10 = o13.n;
    t10();
    return f0;
}
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v20 = 0; v20 < 5; v20++) {
        const v21 = [1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733];
        for (let i24 = 0, i25 = 10;
            i24 < i25;
            (() => {
                i25--;
                const o39 = {
                    n(a31, a32, a33) {
                        const v34 = this;
                        const t4 = v34.Intl.DateTimeFormat;
                        const v37 = t4();
                        v37.valueOf = f0;
                        let v38;
                        try { v38 = v37.formatRangeToParts(v37, v37); } catch (e) {}
                        return v38;
                    },
                };
                const v40 = o39.n;
                v40(v40);
            })()) {
        }
        Object.defineProperty(v21.__proto__, 2, { configurable: true, value: v20 });
    }
}
new F16();
gc();
