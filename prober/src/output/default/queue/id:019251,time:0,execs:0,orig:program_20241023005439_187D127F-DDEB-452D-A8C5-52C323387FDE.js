function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            const v13 = i9--;
            const v15 = ("function").toString;
            try { v15.call(v13); } catch (e) {}
        })()) {
    }
}
const v19 = new F0();
const t12 = v19.constructor;
new t12();
gc();
