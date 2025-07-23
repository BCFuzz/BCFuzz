function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int8Array(2652);
    for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
        const v19 = createGlobalObject().Atomics;
        v19.store(v6, v19, a3);
    }
}
new F1(3.0);
gc();
