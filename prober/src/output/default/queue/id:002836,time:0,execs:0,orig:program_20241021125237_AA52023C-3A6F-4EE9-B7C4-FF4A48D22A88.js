const v2 = new Uint32Array();
let v3;
try {
const t0 = 3;
v3 = t0(v2);
} catch (e) {}
v2["join"](v3);
gc();
