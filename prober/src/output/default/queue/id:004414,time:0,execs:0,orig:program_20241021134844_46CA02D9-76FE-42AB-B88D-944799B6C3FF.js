function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        function* f7(a8, a9, a10, a11) {
            return a5;
        }
        f7();
        return a3;
    }
    f2();
    const v14 = f2();
    f2(this, v14, v14, this);
}
const v16 = new F0();
const v17 = v16.constructor;
new v17(v17, v17);
new F0();
gc();
