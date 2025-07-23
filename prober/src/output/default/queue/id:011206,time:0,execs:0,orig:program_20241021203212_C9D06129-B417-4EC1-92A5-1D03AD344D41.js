const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
let v2;
try { v2 = v1.reduce(v1, v1); } catch (e) {}
const v4 = new BigUint64Array();
v4.constructor = v2;
v4["subarray"]();
gc();
