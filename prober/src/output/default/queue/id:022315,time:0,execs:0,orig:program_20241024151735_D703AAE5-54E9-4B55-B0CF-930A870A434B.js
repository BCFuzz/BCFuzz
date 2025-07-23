class C2 extends Int32Array {
}
const v3 = new C2();
const v5 = new SharedArrayBuffer();
const v6 = new Uint16Array(v5);
v6.set(v3);
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
