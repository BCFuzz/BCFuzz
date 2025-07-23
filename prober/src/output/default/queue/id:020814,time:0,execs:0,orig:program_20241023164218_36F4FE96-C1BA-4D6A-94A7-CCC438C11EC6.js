function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
}
for (let v5 = 0; v5 < 250; v5++) {
    for (let i9 = 0, i10 = 10;
        (() => {
            const v11 = i9 <= i10;
            new F0(!v11, v5);
            return v11;
        })();
        i10--) {
        i9 /= 1929497390;
    }
}
gc();
