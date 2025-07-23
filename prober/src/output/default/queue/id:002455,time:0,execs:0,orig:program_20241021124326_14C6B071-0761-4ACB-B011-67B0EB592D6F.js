function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C3 {
    m(a5) {
        e = a5;
    }
}
const v6 = new C3();
class C7 extends C3 {
}
new C7();
class C9 {
    constructor(a11, a12, a13) {
    }
}
try { v6.m(); } catch (e) {}
new C9();
gc();
