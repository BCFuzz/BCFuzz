class C2 extends Date {
}
const v3 = new C2();
v3.setHours();
class C5 {
}
const v6 = C5.constructor;
try { v6(v3, 256); } catch (e) {}
gc();
