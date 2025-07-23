class C2 extends Uint16Array {
}
const v4 = Symbol.toPrimitive;
const v5 = new C2();
try { v5.copyWithin(-3.0, v4); } catch (e) {}
gc();
