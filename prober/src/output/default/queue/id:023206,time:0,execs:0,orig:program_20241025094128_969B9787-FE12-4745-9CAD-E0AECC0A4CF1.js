function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return 1000;
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
for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
}
for (let i28 = 10, i29 = 10; -13369 < i29; i29--) {
}
gc();
