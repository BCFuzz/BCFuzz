function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    const v5 = v4.g;
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v19 = new Int8Array(255);
        for (const v20 in v19) {
        }
        const v22 = createGlobalObject().Atomics;
        try { v22.or(v5, createGlobalObject, F2); } catch (e) {}
    }
}
new F0();
gc();
