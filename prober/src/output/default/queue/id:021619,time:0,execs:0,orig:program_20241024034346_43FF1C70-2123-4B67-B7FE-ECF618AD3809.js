const v2 = new Uint32Array(1747);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        createGlobalObject().Atomics.compareExchange(v2);
    }
}
new F3();
gc();
