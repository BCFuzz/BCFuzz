class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3();
const v5 = Uint32Array.from(v1);
try { v5.with(v3, v1); } catch (e) {}
gc();
