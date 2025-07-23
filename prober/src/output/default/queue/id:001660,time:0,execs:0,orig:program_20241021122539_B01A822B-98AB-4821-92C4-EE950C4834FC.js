const v1 = new BigInt64Array();
let v3;
try { v3 = new Int32Array(v1); } catch (e) {}
const v5 = new Uint32Array(v3);
v5.fill(v1);
gc();
