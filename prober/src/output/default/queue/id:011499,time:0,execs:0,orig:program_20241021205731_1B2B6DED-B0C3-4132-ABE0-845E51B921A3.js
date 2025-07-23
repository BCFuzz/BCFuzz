function f0() {
    const v1 = [-5.0,1.3528388846609236e+308];
    for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
        const v15 = createGlobalObject().Atomics.isLockFree(v1);
        v15 && v15;
        for (let v17 = 0; v17 < 10; v17++) {
        }
    }
    return f0;
}
f0();
f0();
gc();
