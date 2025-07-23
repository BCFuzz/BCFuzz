const v1 = Array();
class C2 {
}
const v3 = new C2();
const v6 = createGlobalObject().Atomics;
try { v6.add(v3, v3, v1); } catch (e) {}
gc();
