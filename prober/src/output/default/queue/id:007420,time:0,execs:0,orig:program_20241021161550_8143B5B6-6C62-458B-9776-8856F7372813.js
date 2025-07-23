function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        function f5(a6, a7, a8, a9) {
            for (const v12 of (1.7976931348623157e+308).toString(a8).link(a6)) {
            }
            return a9;
        }
        f5();
        return F0;
    }
    f2(F0);
    f2();
}
new F0();
new F0();
gc();
