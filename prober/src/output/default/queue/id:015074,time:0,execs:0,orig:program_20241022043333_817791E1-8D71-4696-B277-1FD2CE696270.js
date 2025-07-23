class C1 {
}
const v2 = new C1();
v2.length = 2n;
const v4 = new Uint8Array();
try { v4.set(v2); } catch (e) {}
gc();
