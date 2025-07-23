class C0 {
}
const v1 = new C0();
let v3;
try { v3 = undefined(); } catch (e) {}
const v5 = new Int8Array(C0, v3, v3);
v5.slice(v1, v3);
gc();
