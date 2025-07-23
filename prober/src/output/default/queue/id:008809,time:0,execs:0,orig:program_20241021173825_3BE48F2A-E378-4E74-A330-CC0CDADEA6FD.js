const v1 = new Float64Array();
let v2;
try { v2 = v1.map(); } catch (e) {}
const v4 = new Uint32Array();
v4.constructor = v2;
v4.slice(v2, v2);
gc();
