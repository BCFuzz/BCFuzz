const v1 = ("message").includes;
let v2;
try { v2 = v1(); } catch (e) {}
const v4 = new BigInt64Array("message", v1);
v4.constructor = v2;
v4.subarray();
gc();
