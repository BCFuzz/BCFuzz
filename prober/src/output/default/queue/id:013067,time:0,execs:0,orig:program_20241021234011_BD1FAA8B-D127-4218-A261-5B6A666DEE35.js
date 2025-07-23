class C1 {
}
const v2 = new Uint8Array(C1);
let v3;
try { v3 = v2.find(C1); } catch (e) {}
const v5 = new Uint32Array();
v5.copyWithin(C1, v3);
gc();
