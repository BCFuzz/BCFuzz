const v0 = /a+?/yvg;
class C1 {
}
const v2 = new C1();
const v3 = v2.isPrototypeOf;
try { v3(v0); } catch (e) {}
gc();
