class C1 extends ArrayBuffer {
}
const v2 = new C1();
v2.slice(v2, C1);
gc();
