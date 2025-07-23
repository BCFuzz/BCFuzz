const v2 = new BigInt64Array(255);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        const v20 = createGlobalObject().Atomics;
        try { v20.store(v2); } catch (e) {}
    }
}
new F3(BigInt64Array, 255, 255);
gc();
