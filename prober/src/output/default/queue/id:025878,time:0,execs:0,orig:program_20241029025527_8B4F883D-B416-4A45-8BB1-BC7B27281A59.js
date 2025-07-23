class C1 extends Uint16Array {
}
const v2 = new C1();
v2.subarray();
const v5 = new SharedArrayBuffer(C1, SharedArrayBuffer);
const v7 = new Uint8Array(v5);
v7.set(v2);
gc();
