class C1 extends Int32Array {
}
const v2 = new C1();
const v4 = new SharedArrayBuffer();
const v6 = new Uint8Array(v4);
v6.set(v2);
gc();
