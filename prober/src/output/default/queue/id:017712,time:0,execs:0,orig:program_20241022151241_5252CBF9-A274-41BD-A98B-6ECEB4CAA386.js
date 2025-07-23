new Float64Array(Float64Array);
const v3 = new Uint8Array();
let v4;
try { v4 = v3.with(); } catch (e) {}
v4 + (v4 << v4);
for (let v7 = 0; v7 < 250; v7++) {
}
gc();
