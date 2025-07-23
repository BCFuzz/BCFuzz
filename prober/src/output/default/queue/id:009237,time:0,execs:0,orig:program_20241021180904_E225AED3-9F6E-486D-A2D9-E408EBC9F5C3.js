let v0 = 2147483648;
const v1 = v0--;
const v3 = new Uint32Array();
try { v3.with(v1); } catch (e) {}
gc();
