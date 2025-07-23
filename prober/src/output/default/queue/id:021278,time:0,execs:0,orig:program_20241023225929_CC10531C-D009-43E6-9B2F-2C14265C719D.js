function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        const v19 = v18.isLockFree(1);
        try { v18.sub(v19); } catch (e) {}
        for (let v21 = 0; v21 < 250; v21++) {
        }
    }
}
new F1(1, 1, 1);
gc();
