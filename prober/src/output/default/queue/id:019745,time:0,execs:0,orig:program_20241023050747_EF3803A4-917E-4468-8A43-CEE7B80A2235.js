const v1 = ("RQ").trimStart();
const v3 = new Uint32Array("RQ", "RQ", Uint32Array);
v3.constructor = v1;
try { v3.slice(v1); } catch (e) {}
gc();
