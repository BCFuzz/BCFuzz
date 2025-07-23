function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = [[[v2,v2,v2],v2]];
const o15 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t8 = v10.Intl.NumberFormat;
        t8().formatToParts(v5);
        return v2;
    },
};
const t13 = o15.n;
t13();
gc();
