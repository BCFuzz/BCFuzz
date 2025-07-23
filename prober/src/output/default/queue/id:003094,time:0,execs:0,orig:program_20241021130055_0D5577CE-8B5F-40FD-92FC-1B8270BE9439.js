function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this?.constructor;
    try { new v4(a3); } catch (e) {}
    this.h = f0;
}
class C6 extends F1 {
    #p(a8, a9) {
    }
}
new C6();
gc();
