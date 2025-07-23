const v1 = new WeakMap();
function f2(a3) {
    return v1;
}
class C4 extends f2 {
    #d;
}
new C4();
try { new C4(); } catch (e) {}
gc();
