const v0 = [-183442.53438927,-78.71001685689612,1.3952302938832295e+308,3.101179652464845,4.0,-243.27411489680742,-1000000000.0,-1e-15,0.22095842040443936,0.5740468228974775];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = v0.toLocaleString(a4);
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o26 = {
                n(a15, a16, a17) {
                    const v18 = this;
                    const v20 = v18.Intl.DateTimeFormat;
                    function f21(a22) {
                        return v5;
                    }
                    v20[Symbol.toPrimitive] = f21;
                    v20.timeZone = v20;
                    v20(a16, v20);
                    return v18;
                },
            };
            const v27 = o26.n;
            try { v27(a3); } catch (e) {}
        })()) {
    }
}
new F1();
for (let i34 = 0, i35 = 10; i35--, i34 < i35;) {
}
gc();
