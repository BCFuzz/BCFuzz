function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
let v6 = new F0();
function f7(a8, a9, a10, a11) {
    function f12(a13) {
        return F0;
    }
    a10.toString = f12;
    v6 %= a10;
    return F0;
}
try { f7(f7, f7, f7); } catch (e) {}
gc();
