function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 extends Set {
        }
        gc();
        const v10 = new C7();
        try { v10.isDisjointFrom(); } catch (e) {}
    }
    const v12 = new F2();
    new F2(v12, v12);
}
new F0();
gc();
