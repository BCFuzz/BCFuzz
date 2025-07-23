class C2 extends Uint16Array {
}
const v3 = new C2();
v3.copyWithin(Uint16Array, -4294967297);
gc();
