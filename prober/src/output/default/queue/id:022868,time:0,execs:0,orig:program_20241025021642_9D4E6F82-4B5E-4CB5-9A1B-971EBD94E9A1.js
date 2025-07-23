class C1 extends BigUint64Array {
}
const v2 = new C1();
Date.toString = Date;
const v7 = ([false,10000n,Date]).join();
v7.replace(v7, v2);
gc();
