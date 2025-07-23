const v2 = new Int32Array(1090);
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        createGlobalObject().Atomics.add(v2);
    }
}
new F3();
gc();
