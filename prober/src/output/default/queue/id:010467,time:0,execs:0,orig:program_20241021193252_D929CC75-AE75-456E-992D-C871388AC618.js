let v1;
try { v1 = Uint32Array(); } catch (e) {}
const v4 = new Uint8Array(7);
v4["includes"](Uint32Array, v1);
gc();
