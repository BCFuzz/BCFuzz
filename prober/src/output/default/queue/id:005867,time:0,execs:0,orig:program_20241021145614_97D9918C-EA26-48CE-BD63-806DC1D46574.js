class C2 extends Int32Array {
}
const v3 = new C2();
v3.toString = Symbol;
try { v3.subarray(v3); } catch (e) {}
gc();
