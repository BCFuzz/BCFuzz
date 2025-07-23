class C1 extends BigInt64Array {
}
const v2 = new C1();
class C3 {
}
const v5 = Float64Array.from(C3);
try { v2.set(v5); } catch (e) {}
gc();
