let v3;
try { v3 = Uint8Array(); } catch (e) {}
const v4 = new Uint8Array(v3, -9007199254740991, v3);
v4.fill(128, v3, -9007199254740991);
gc();
