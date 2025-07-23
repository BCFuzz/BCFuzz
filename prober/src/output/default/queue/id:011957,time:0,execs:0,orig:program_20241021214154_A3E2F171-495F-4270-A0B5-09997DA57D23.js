function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const v15 = new Date();
            const v16 = v15.getUTCMilliseconds();
            v16 & v16;
        })()) {
    }
}
const v20 = new F0(F0, F0, F0, F0);
const t13 = v20.constructor;
new t13(v20);
gc();
