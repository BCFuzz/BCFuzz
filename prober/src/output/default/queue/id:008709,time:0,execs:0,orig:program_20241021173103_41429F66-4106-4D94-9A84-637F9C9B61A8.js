function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 100; v2++) {
    }
    class C3 {
    }
    "-26094" instanceof C3.bind();
}
new F0();
new F0();
gc();
