function f0(a1) {
    with (a1) {
    }
    return a1;
}
class C2 extends f0 {
}
const v3 = f0(C2);
try { new v3(); } catch (e) {}
gc();
