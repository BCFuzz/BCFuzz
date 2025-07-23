function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i4 < i5;
        (() => {
            const v9 = /\b(?<=)/dsu;
            v9.exec(v9);
            i5--;
        })()) {
    }
}
new F0();
gc();
