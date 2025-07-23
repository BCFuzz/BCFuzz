class C1 extends Int8Array {
}
const v2 = new C1();
v2.slice(C1, v2);
gc();
