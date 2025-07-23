function f0() {
}
class C1 extends f0 {
    toString() {
        f0 >>> this;
    }
}
const v4 = new C1();
const v5 = [0.8215086860132654,2.2250738585072014e-308];
try { v5.with(v4); } catch (e) {}
gc();
