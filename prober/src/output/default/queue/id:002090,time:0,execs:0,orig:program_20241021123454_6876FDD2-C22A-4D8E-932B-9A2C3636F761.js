class C1 extends BigUint64Array {
}
const v2 = new C1();
const v3 = v2;
v3.copyWithin();
gc();
