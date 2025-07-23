const v3 = new BigInt64Array(64);
let v5 = -v3[45];
v5++;
const v9 = new Uint16Array(998);
const v10 = v9.join(v5);
const v11 = Int32Array.constructor;
try { v11(v10); } catch (e) {}
gc();
