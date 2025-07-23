function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Uint8Array(681);
    for (let i8 = 0, i9 = 10;
        (() => {
            i9--;
            class C12 extends Map {
            }
            return i8 < i9;
        })();
        ) {
        createGlobalObject().Atomics.store(v4, i9, 127);
    }
    for (let i24 = 10, i25 = 10; -13369 < i25; i25--) {
    }
}
new F0();
gc();
