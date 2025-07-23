class C0 {
}
const v1 = new C0();
const v2 = C0.bind(C0, v1);
try { v2(v2, v2, v1); } catch (e) {}
gc();
