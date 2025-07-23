class C0 {
}
const v1 = new C0();
const v2 = v1.__defineSetter__;
let v3;
try { v3 = v2(); } catch (e) {}
for (const v4 in v3) {
}
gc();
