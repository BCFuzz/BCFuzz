function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v3 = new F0();
const v4 = new F0();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(F0); } catch (e) {}
    a7.e = a7;
}
new F5(v3);
new F5(v4);
class C12 {
}
const v13 = new C12();
new C12(v13);
gc();
