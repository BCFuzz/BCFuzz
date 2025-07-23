function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        function* f7(a8, a9, a10, a11) {
            return a5;
        }
        f7(a3, F0, f2, f7).next();
        return this;
    }
    f2();
    f2();
    f2();
}
const v17 = new F0();
const t14 = v17.constructor;
new t14();
new F0();
gc();
