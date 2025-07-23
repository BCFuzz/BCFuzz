const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = 257;
        this.d = true;
        class C12 {
        }
        delete this.d;
    }
    new F10();
    class C15 extends F10 {
    }
    new C15();
    return true;
}
v3.map(f4);
gc();
