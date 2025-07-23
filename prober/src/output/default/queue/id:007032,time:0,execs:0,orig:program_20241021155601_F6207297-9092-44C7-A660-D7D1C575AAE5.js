function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 {
}
const v4 = new C3();
function f5() {
    return F0 ^ 2147483649n;
}
v4.constructor = f5;
const v7 = v4.constructor;
try { v7(); } catch (e) {}
gc();
