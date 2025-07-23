new Set();
[];
new Uint16Array();
const v9 = new Int8Array();
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
    }
    class C15 extends f14 {
    }
}
new F12();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = this.constructor;
    try { new v21(this); } catch (e) {}
    a19.d = a19;
    this.NEGATIVE_INFINITY = 1000;
    this.e = a20;
}
new F17(Uint8Array);
const v24 = new F17(v9);
new F17(v24);
gc();
