function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10;
        (() => {
            const v11 = i9 < i10;
            !v11;
            return v11;
        })();
        i10--) {
        i9 /= 8;
        for (let v18 = 0; v18 < 10; v18++) {
        }
    }
}
const v19 = new F0(F0, F0, F0, F0);
new F0(F0, v19, F0, F0);
gc();
