class C0 {
}
const v1 = new C0();
const v3 = ([v1]).slice(v1);
const v6 = new ArrayBuffer(15);
const v8 = new DataView(v6);
v8.getInt16(v3, v1);
gc();
