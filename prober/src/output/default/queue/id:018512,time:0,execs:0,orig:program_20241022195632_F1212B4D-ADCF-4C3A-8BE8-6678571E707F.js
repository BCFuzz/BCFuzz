class C2 extends Uint8Array {
}
const v3 = new C2();
v3.constructor = undefined;
v3.subarray();
gc();
