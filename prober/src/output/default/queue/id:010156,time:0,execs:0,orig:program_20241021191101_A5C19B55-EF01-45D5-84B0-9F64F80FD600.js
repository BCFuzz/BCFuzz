class C0 {
}
const v1 = new C0();
const v2 = v1[5];
const v4 = new Uint8ClampedArray(v1, v2, v2);
try { v4.set(v2); } catch (e) {}
gc();
