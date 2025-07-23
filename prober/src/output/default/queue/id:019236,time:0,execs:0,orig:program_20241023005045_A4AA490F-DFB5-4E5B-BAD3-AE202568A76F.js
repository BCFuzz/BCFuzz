class C0 {
}
const v1 = new C0();
const v2 = v1.__defineSetter__;
const v3 = v1.constructor;
const v5 = createGlobalObject();
try { v5.load(v3, v2); } catch (e) {}
gc();
