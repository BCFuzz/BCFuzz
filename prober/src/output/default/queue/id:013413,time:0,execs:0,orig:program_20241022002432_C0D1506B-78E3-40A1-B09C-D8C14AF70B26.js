function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    const v5 = v4.g;
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        const v18 = createGlobalObject().Atomics;
        try { v18.or(v5, createGlobalObject, v18); } catch (e) {}
        for (let v20 = 0; v20 < 10; v20++) {
        }
    }
}
new F0();
new F0();
gc();
