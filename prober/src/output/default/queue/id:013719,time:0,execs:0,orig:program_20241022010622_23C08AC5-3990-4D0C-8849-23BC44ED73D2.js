class C1 extends Int16Array {
}
const v3 = new C1(5);
const v5 = new Int8Array(C1, 5, 5);
try { v5.set(v3); } catch (e) {}
gc();
