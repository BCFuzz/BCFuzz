function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
const v3 = v2.__defineSetter__;
try { v3.call(f0); } catch (e) {}
gc();
