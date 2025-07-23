function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
for (let i8 = 0, i9 = 10;
    (() => {
        const v10 = i8 < i9;
        const o15 = {
            o(a12, a13, a14) {
                return i8;
            },
        };
        for (const v16 in o15) {
            v5[v16];
        }
        return v10;
    })();
    i9--) {
}
gc();
