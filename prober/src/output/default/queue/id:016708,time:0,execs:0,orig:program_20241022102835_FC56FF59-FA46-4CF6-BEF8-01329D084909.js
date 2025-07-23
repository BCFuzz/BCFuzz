const v1 = new Int32Array();
let v2;
try { v2 = v1.reduce(); } catch (e) {}
const v3 = new Int32Array(v1, v2, v2);
v3.constructor = v2;
v3["subarray"]();
gc();
