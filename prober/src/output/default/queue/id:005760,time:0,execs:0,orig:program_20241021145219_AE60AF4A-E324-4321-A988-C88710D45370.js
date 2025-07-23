class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
class C3 {
}
const v4 = new C3();
v4.toString = f2;
try { ("-26094").includes(v4); } catch (e) {}
gc();
