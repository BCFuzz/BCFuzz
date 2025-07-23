function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    return a5;
}
class C6 extends f3 {
}
class C8 extends F0 {
    valueOf(a10, a11, a12, a13) {
        v2 % a12;
    }
}
const v15 = new C8();
try { v15.valueOf(C6, C6, -239759831n); } catch (e) {}
gc();
