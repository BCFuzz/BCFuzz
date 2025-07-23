class C1 extends Date {
}
const v2 = new C1();
v2.setHours(v2);
class C4 {
}
const v5 = C4.constructor;
try { v5(v2); } catch (e) {}
gc();
