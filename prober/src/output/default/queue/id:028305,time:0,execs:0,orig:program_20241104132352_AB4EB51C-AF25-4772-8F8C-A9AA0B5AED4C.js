const v0 = [-248907.36638096825,5.0,1e-15,0.8479239686645385];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = v0.toLocaleString(a4);
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o22 = {
                n(a15, a16, a17) {
                    const v18 = this;
                    const v20 = v18.Intl.DateTimeFormat;
                    v20.timeStyle = v5;
                    v20(a16, v20);
                    return this;
                },
            };
            const v23 = o22.n;
            try { v23(F1, F1); } catch (e) {}
        })()) {
    }
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
}
new F1();
for (let i40 = 0, i41 = 10; i41--, i40 < i41;) {
}
gc();
