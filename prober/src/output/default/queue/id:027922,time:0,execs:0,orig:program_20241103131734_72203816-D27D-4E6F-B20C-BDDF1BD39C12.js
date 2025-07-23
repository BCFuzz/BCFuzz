class C3 extends Uint8Array {
}
const v4 = new C3(4294967296);
v4.subarray("1073741824");
gc();
