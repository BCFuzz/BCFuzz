const v2 = new Int8Array(2540);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f7() {
        Uint8ClampedArray();
        return v2;
    }
    F5.toString = f7;
    const v10 = new F5();
    function f11() {
        return v2;
    }
    Object.defineProperty(v10, "g", { enumerable: true, get: f11 });
    const v12 = v10.g;
    createGlobalObject().Atomics.or(v12, createGlobalObject, F5);
}
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    new F3();
}
try { new F17(); } catch (e) {}
gc();
