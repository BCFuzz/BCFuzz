function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [-5.0,1.3528388846609236e+308];
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        const v19 = v18.isLockFree(v5);
        try { v18.sub(v19, createGlobalObject, createGlobalObject); } catch (e) {}
        for (let v21 = 0; v21 < 250; v21++) {
        }
    }
}
new F0();
gc();
