function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            const v17 = new Int8Array(255);
            for (const v18 in v17) {
            }
            const v21 = new Set();
            for (let v22 = 0; v22 < 5; v22++) {
            }
            v21.add("isSealed");
        })()) {
        i9--;
    }
}
new F0();
gc();
