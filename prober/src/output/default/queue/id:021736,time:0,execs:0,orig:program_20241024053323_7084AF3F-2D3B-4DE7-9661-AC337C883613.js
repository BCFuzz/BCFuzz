const v1 = new BigInt64Array();
let v2;
try { v2 = v1.with(); } catch (e) {}
const v4 = new ArrayBuffer(v2, ArrayBuffer);
const t4 = createGlobalObject().Float16Array;
new t4(v4, v2, v2);
gc();
