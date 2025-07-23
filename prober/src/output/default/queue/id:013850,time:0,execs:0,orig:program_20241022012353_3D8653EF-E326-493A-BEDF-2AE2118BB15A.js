function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const v15 = new Set();
            this.__proto__ = v15;
        })()) {
    }
}
new F0(F0, F0, F0, F0);
new F0();
gc();
