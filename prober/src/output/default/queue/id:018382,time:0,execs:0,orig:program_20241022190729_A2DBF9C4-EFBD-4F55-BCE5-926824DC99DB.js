class C0 {
}
const v1 = new C0();
let v2;
try { v2 = v1.__defineSetter__(C0, C0, v1); } catch (e) {}
const v4 = new Uint16Array(C0, v2);
v4.constructor = v2;
v4.slice(v2, v2);
gc();
