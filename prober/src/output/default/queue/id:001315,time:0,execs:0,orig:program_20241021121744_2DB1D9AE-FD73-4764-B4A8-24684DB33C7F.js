class C1 {
}
const v2 = new C1();
let v3;
try { v3 = v2.constructor(v2, v2, true); } catch (e) {}
v3 | true;
gc();
