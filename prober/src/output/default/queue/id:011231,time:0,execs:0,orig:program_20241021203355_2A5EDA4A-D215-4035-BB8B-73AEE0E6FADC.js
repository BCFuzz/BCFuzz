let v3;
try { v3 = Uint8Array(128, 128, 128); } catch (e) {}
const v4 = new Uint8Array();
v4.fill(128, v3, -41569);
gc();
