const v2 = new SharedArrayBuffer(Float64Array, SharedArrayBuffer);
let v3 = 31737;
const v4 = v3--;
const v5 = new Float64Array(v3, v4, v4);
const v6 = v5.constructor;
try { new v6(v2, v3); } catch (e) {}
gc();
