const v2 = Symbol.for();
class C3 extends WeakMap {
}
const v4 = new C3();
try { v4.set(v2); } catch (e) {}
gc();
