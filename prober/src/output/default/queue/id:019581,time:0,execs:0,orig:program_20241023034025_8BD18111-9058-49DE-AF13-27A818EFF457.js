const v2 = new Uint8Array(2540);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f7() {
        Uint8ClampedArray(v2);
        return 2540;
    }
    F5.toString = f7;
    const v10 = new F5();
    function f11() {
        return v2;
    }
    Object.defineProperty(v10, "g", { enumerable: true, get: f11 });
    const v12 = v10.g;
    for (let i15 = 0, i16 = 10; i16--, i15 < i16;) {
        const v25 = createGlobalObject().Atomics;
        try { v25.or(v12, createGlobalObject, F5); } catch (e) {}
    }
}
new F3();
gc();
