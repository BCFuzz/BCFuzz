function f0() {
    return f0;
}
class C1 {
    b;
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(C1); } catch (e) {}
    a6.b;
    this.e = f0;
}
new F4(v3);
const v12 = new F4(v2);
new F4(v12);
gc();
