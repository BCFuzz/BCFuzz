class C0 {
}
let v1 = new C0();
++v1;
const v4 = ([v1,v1]).slice();
const v7 = new ArrayBuffer(15);
const v9 = new DataView(v7);
v9.getInt16(v4, v1);
gc();
