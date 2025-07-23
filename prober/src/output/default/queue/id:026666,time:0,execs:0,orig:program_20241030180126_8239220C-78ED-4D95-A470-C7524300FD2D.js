class C2 extends Int32Array {
}
const v3 = new C2();
const v6 = new SharedArrayBuffer(Uint16Array, v3.subarray());
const v7 = new Uint16Array(v6);
v7.set(v3);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
