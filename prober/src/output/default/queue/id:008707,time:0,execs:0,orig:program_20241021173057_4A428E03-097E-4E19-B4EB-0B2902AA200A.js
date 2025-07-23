function F0() {
    if (!new.target) { throw 'must be called with new'; }
    class C2 {
    }
    "-26094" instanceof C2.bind();
}
new F0();
gc();
