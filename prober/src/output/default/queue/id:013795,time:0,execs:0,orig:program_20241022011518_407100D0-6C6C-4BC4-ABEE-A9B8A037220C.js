class C1 extends Uint8Array {
}
const v2 = new C1();
v2.slice(C1, C1);
gc();
