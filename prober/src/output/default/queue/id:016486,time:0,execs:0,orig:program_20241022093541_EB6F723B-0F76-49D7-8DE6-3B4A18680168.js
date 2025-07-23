let v0 = 4096n;
const v1 = v0--;
class C2 {
}
const v3 = new C2();
const v5 = v3.constructor.bind;
try { v5.call(v1); } catch (e) {}
gc();
