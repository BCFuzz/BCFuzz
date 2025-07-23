class C1 {
}
const v2 = new C1();
function f3(a4) {
    a4 in "p";
}
v2.valueOf = f3;
const v6 = v2.valueOf;
try { v6(); } catch (e) {}
gc();
