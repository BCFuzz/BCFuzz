function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a3;
}
for (let v5 = 0; v5 < 25; v5++) {
    for (let i9 = 0, i10 = 10;
        (() => {
            const v11 = i9 <= i10;
            const v12 = !v11;
            const v14 = Symbol.iterator;
            const o16 = {
                [v14]() {
                },
            };
            new F0(v12, v5);
            return v11;
        })();
        i10--) {
        i9 /= -62208;
    }
}
gc();
