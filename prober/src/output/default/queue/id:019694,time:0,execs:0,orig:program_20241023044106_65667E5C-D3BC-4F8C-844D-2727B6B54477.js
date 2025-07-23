const v1 = new Uint8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F4();
    function f7() {
        return v1;
    }
    Object.defineProperty(v6, "g", { enumerable: true, get: f7 });
    const v8 = v6.g;
    for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
        const v21 = createGlobalObject().Atomics;
        try { v21.or(v8); } catch (e) {}
    }
}
new F2();
gc();
