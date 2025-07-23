function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return this;
    }
    class C5 extends f4 {
    }
}
new F2();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(this); } catch (e) {}
    a9.d = a9;
    this.d = 1000;
    this.e = a10;
}
new F7(Uint8Array);
const v14 = new F7(F7);
new F7(v14);
gc();
