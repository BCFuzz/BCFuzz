const v2 = new Int32Array(1073741824);
const v3 = v2.subarray();
try { Date.constructor(v3); } catch (e) {}
gc();
