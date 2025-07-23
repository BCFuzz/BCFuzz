const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = 257;
        this.d = true;
        delete this.d;
    }
    new F10();
    class C14 extends F10 {
    }
    new C14();
    const v16 = new C14();
    return v16;
}
v3.map(f4);
gc();
