const v1 = new Int16Array();
function f2(a3) {
    return v1;
}
class C4 extends f2 {
    [-1] = Int16Array;
}
try { new C4(); } catch (e) {}
gc();
