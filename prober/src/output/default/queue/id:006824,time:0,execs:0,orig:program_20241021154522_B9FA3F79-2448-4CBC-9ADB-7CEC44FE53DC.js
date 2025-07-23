function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            const v17 = new Int8Array(255);
            for (const v18 in v17) {
            }
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C23 extends F19 {
                #toString(a25, a26) {
                }
            }
        })()) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
gc();
