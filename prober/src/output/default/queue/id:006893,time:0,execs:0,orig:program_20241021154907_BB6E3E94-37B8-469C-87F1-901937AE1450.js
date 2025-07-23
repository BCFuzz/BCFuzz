class C1 extends BigUint64Array {
}
new C1();
C1.prototype = C1;
new C1();
gc();
