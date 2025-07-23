function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o21 = {
                n(a15, a16, a17) {
                    const v18 = this;
                    const v19 = v18.Intl;
                    v19.DateTimeFormat();
                    return v19;
                },
            };
            const t9 = o21.n;
            t9();
        })()) {
    }
}
new F0();
gc();
