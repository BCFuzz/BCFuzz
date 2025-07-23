function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        for (const v8 in this) {
        }
        return a7;
    }
    f3(this, F0, F0, this);
}
new F0();
gc();
