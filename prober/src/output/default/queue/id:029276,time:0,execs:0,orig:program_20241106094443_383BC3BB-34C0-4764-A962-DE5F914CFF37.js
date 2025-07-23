function f1(a2, a3) {
    const v4 = [-1083304700];
    function f5() {
        return 268435441n;
    }
    v4[Symbol.toPrimitive] = f5;
    const o17 = {
        n(a9, a10, a11) {
            const v12 = this;
            const t9 = v12.Intl.NumberFormat;
            return t9().formatToParts(v4);
        },
    };
    const t13 = o17.n;
    return t13();
}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v24 = 0; v24 < 5; v24++) {
        const v25 = [1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733];
        for (let i28 = 0, i29 = 10;
            i28 < i29;
            (() => {
                i29--;
                const o43 = {
                    n(a35, a36, a37) {
                        const v38 = this;
                        const t4 = v38.Intl.DateTimeFormat;
                        const v41 = t4();
                        v41.toString = f1;
                        try { v41.formatRangeToParts(v41, v41); } catch (e) {}
                        return i29;
                    },
                };
                const v44 = o43.n;
                v44(v44, F20, a23, v44, 268435441n);
            })()) {
        }
        Object.defineProperty(v25.__proto__, 2, { configurable: true, value: v24 });
    }
}
new F20(f1, 268435441n);
gc();
