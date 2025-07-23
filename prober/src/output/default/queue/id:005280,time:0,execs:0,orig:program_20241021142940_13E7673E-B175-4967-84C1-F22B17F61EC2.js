class C1 extends BigInt64Array {
}
const v2 = new C1();
delete v2[-5.778355168535873e+307];
gc();
