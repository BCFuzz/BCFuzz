const v1 = new WeakSet();
let v2;
try { v2 = v1.add(); } catch (e) {}
const v4 = new Uint32Array();
v4.constructor = v2;
v4.subarray(v2, v2);
gc();
