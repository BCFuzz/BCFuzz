function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v17 = createGlobalObject().Atomics;
        try { v17.add(v4, i8, this); } catch (e) {}
        for (let v19 = 0; v19 < 10; v19++) {
        }
    }
}
new F0();
new F0();
gc();
