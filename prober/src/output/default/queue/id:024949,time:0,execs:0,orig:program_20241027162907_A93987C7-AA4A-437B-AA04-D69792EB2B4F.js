class C0 {
}
const v1 = new C0();
const v3 = new Uint8ClampedArray();
try { v3.set(v1, 9007199254740990); } catch (e) {}
gc();
