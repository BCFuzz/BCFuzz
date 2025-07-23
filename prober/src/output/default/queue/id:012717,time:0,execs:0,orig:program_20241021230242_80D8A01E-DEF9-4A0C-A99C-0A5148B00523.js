const v3 = new BigInt64Array(64);
const v5 = -v3[45];
const v8 = new Uint16Array(998);
const v9 = v8.join(v5);
const v10 = Int32Array.constructor;
try { v10(v9, v9); } catch (e) {}
gc();
