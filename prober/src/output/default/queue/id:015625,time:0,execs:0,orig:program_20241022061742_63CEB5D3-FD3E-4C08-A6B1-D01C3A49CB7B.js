class C1 {
}
const v2 = new C1();
const v4 = new Uint8Array();
try { v4.set(v2, 2n); } catch (e) {}
gc();
