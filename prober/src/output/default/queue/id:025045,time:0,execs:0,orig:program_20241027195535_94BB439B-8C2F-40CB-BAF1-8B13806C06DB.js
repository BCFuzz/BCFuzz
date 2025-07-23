class C1 extends Uint16Array {
}
const v2 = new C1();
const v5 = new SharedArrayBuffer(512);
const v7 = new BigInt64Array(v5);
v7.with(v2, v2);
for (let i11 = 0, i12 = 10; i12--, i11 < i12;) {
}
gc();
