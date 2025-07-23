class C0 {
}
let v1;
try { v1 = C0.apply(); } catch (e) {}
const v3 = new Uint8ClampedArray(v1);
v3.slice(v1);
gc();
