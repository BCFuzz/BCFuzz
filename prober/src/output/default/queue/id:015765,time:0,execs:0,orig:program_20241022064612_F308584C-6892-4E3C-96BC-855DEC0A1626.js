function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return this;
    }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v16 = /gUa\Sc/dgi.lastIndex;
        const v19 = createGlobalObject().Atomics;
        try { v19.and(v16, f4, v19); } catch (e) {}
        for (let v21 = 0; v21 < 10; v21++) {
        }
    }
}
const v22 = new F0();
new F0(v22, v22);
gc();
