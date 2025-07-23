class C1 {
}
const v2 = new C1();
class C3 {
}
const v4 = new C3();
function f5(a6) {
    a6[0.0] = v2;
    return a6;
}
v4.constructor = f5;
const v7 = v4.constructor;
new v7(v7.prototype);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this.constructor;
    try { new v14(v2, v14); } catch (e) {}
}
new F10();
gc();
