class C3 {
}
const v4 = new C3();
const v5 = v4.__defineSetter__;
try { v5.apply(v5, null); } catch (e) {}
gc();
