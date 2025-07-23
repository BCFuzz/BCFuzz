function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this?.constructor;
    try { new v4(); } catch (e) {}
    this.constructor = f0;
    this.constructor;
}
class C7 extends F1 {
}
new C7();
new C7();
gc();
