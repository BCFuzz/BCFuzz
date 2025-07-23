class C0 {
}
const v1 = new C0();
v1.constructor = v1;
try { v1(); } catch (e) {}
gc();
