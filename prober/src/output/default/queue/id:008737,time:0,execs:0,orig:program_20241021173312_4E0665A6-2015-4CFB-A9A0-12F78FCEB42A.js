function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        function* f7(a8, a9, a10, a11) {
            return f2;
        }
        f7().next();
        return F0;
    }
    f2(F0, f2, this, this);
    f2(F0, f2(F0, F0, this, f2), F0, F0);
}
const v17 = new F0();
const t13 = v17.constructor;
new t13();
new F0();
gc();
