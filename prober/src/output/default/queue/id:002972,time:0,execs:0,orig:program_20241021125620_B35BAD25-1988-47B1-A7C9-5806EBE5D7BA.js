for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        class C4 extends Array {
        }
    }
    new F1();
}
gc();
