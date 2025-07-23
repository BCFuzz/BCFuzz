function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return f6;
    }
    class C9 extends f6().caller {
    }
}
new F0(F0, F0, F0, F0);
gc();
