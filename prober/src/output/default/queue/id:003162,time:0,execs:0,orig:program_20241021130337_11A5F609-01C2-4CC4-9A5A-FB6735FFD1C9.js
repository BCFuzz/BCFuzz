class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3();
const v4 = v3.constructor;
const v7 = new Int32Array(3);
try { v7.sort(v4); } catch (e) {}
gc();
