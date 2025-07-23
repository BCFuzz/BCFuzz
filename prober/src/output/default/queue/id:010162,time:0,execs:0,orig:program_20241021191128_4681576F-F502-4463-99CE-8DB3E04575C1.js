let v0 = 4294967295;
const v1 = v0++;
let v2;
try { v2 = v1(); } catch (e) {}
const v4 = new Uint16Array();
v4.fill(Uint16Array, Uint16Array, v2);
gc();
