const v0 = [-248907.36638096825,5.0,1e-15,0.8479239686645385];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = v0.toLocaleString();
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            const v13 = i9--;
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
                    return v13;
                },
            };
            const v27 = o26.n;
            try { v27(); } catch (e) {}
        })()) {
    }
}
new F1(F1, v0);
for (let i34 = 0, i35 = 10; i35--, i34 < i35;) {
}
gc();
