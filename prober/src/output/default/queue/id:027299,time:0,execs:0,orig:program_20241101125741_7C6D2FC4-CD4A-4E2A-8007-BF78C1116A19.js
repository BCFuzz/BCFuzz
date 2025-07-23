const v2 = new Int16Array(257);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f7() {
        return F5();
    }
    F5.toString = f7;
    const v11 = createGlobalObject().Atomics;
    try { v11.or(v2, createGlobalObject, F5); } catch (e) {}
}
new F3();
gc();
