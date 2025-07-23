const v1 = new WeakMap();
class C3 extends WeakMap {
    p(a5, a6, a7, a8) {
        a6 **= a6;
    }
}
const v9 = new C3();
try { v9.p(v1, -5n); } catch (e) {}
gc();
