let v1;
try { v1 = Uint32Array.call(); } catch (e) {}
const v3 = new Int16Array(v1);
v3.constructor = v1;
v3.subarray();
gc();
