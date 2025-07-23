function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Uint8Array(681);
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        createGlobalObject().Atomics.store(v4, i8, 127);
    }
    for (let i22 = 255, i23 = 255; -13369 < i23; i23--) {
    }
}
new F0();
gc();
