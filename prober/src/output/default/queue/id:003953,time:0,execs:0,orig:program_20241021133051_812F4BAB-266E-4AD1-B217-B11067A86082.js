class C0 {
}
const v1 = new C0();
const v3 = new BigUint64Array();
try { v3.fill(v1); } catch (e) {}
gc();
