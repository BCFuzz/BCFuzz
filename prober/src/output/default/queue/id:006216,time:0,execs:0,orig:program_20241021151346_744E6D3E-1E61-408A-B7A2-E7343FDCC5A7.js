class C0 {
}
const v1 = new C0();
const v2 = v1.e;
C0.toString = v2;
const v4 = new Uint8ClampedArray(C0, v2, v2);
try { v4.slice(C0); } catch (e) {}
gc();
