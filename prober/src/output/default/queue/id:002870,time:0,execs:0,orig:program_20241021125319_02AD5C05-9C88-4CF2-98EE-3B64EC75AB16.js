const v1 = new BigInt64Array();
class C2 {
}
const v3 = new C2();
const v4 = v3[C2];
let v6;
try { v6 = v4["push"](); } catch (e) {}
v1.sort(v6);
gc();
