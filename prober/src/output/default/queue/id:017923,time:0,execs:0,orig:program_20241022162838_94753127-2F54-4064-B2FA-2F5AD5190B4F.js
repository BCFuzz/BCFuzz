function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        const v16 = createGlobalObject().Atomics;
        try { v16.load(createGlobalObject, F0); } catch (e) {}
        for (let v18 = 0; v18 < 250; v18++) {
        }
    }
}
new F0(F0, F0);
gc();
