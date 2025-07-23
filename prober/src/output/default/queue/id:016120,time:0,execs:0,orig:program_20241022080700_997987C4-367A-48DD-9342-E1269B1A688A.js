class C1 extends Int32Array {
}
const v2 = new C1();
Int32Array.from(v2.subarray());
gc();
