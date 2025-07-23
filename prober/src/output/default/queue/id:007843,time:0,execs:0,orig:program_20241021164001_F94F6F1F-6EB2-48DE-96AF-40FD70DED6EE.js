let v2;
try { v2 = Uint8Array(); } catch (e) {}
const v3 = new Uint8Array(128, 128, v2);
v3.fill(128, v2, 4061);
gc();
