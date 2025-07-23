const v1 = [2032337264,2032337264];
function f2(a3) {
    return 2032337264;
}
v1.valueOf = f2;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i12 = 0, i13 = 10;
        i12 < i13;
        (() => {
            const v17 = i13--;
            const o26 = {
                n(a19, a20, a21) {
                    const v22 = this;
                    return v22.Intl.DateTimeFormat().formatRangeToParts(v17, v1);
                },
            };
            const t7 = o26.n;
            t7(f2);
        })()) {
    }
}
new F4(v1, v1, 2032337264, f2);
gc();
