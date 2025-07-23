function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        (() => {
            const v10 = i9--;
            const v11 = v10 << v10;
            v11 / v11;
            return i8 < i9;
        })();
        ) {
    }
}
const v18 = new F0();
const t13 = v18.constructor;
new t13();
gc();
