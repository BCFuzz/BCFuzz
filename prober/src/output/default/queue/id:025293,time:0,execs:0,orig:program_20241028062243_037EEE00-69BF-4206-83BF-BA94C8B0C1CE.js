function f0() {
    function f1() {
    }
    const v3 = new Uint32Array();
    v3.toString = f1;
    delete this[v3];
}
f0();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
gc();
