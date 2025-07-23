function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const v15 = new Set();
            for (let v16 = 0; v16 < 32; v16++) {
                this["p" + v16] = v16;
            }
            this.__proto__ = v15;
        })()) {
    }
}
const v21 = new F0();
new F0(v21, v21, F0, F0);
gc();
