const v1 = createGlobalObject();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Uint8Array(681);
    for (let i10 = 0, i11 = 10;
        (() => {
            i11--;
            class C14 extends Map {
            }
            return i10 < i11;
        })();
        ) {
        v1.Atomics.store(v6, i11, 127);
    }
    for (let i24 = 10, i25 = 10; -13369 < i25; i25--) {
    }
}
new F2();
gc();
