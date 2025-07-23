const v1 = Date();
const v3 = new Uint8Array(v1, v1, Uint8Array);
v3.constructor = v1;
try { v3.subarray(Date); } catch (e) {}
gc();
