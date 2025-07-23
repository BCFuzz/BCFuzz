class C0 {
}
const v1 = new C0();
let v2 = -268435456n;
const v3 = v2--;
const v5 = new Float64Array();
try { v5.copyWithin(v1, v3); } catch (e) {}
gc();
