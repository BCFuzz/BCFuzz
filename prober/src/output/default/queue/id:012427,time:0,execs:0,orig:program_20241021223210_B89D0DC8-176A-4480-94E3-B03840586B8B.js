function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o22 = {
                n(a15, a16, a17) {
                    const v18 = this;
                    const t4 = v18.Intl.Segmenter;
                    const v21 = new t4();
                    return v21;
                },
            };
            const t9 = o22.n;
            t9();
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
