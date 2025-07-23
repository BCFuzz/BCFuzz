function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const v16 = new Int8Array(255);
            v16[32] = v16;
            for (const v17 in v16) {
            }
            const v19 = new Set();
            v19.add().values();
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
