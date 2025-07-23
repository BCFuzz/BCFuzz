const v1 = Uint8ClampedArray.of();
class C2 {
}
const v3 = new C2();
const v6 = new Proxy([1073741824,-26526], v3);
try { v1.toSorted(v6); } catch (e) {}
gc();
