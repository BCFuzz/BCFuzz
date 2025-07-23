class C2 extends Int16Array {
}
const v3 = new C2();
const v5 = new SharedArrayBuffer();
const v6 = new Int32Array(v5);
v6.set(v3);
gc();
