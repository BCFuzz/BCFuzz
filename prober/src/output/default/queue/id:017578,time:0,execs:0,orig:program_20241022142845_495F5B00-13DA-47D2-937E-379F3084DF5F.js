const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = true;
        delete this.d;
    }
    new F9();
    class C13 extends F9 {
    }
    new C13();
    return f3;
}
v2.map(f3);
gc();
