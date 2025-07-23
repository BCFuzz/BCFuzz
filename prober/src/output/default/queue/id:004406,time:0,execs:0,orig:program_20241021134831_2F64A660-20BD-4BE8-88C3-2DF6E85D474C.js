function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            new Float64Array(64);
            const v20 = new Set();
            v20.add("isSealed");
        })()) {
        i9--;
    }
}
new F0(F0, F0, F0, F0);
gc();
