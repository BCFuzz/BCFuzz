function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3, a4, a5, a6) {
        function* f7(a8, a9, a10, a11) {
            return a4;
        }
        f7(this, F0, F0, f7);
    }
    f2();
    f2();
    f2();
}
new F0();
function f17(a18, a19, a20) {
    return a18;
}
new F0();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new Uint32Array(1000);
for (const v29 in v28) {
}
gc();
