function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Uint32Array(26);
    createGlobalObject().Atomics.exchange(v6);
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
}
new F0();
gc();
