class C1 extends Int32Array {
}
const v2 = new C1();
Uint8ClampedArray.from(v2);
gc();
