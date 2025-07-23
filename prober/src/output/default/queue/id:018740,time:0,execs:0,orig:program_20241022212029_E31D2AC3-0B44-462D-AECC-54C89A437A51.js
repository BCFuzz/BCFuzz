const v1 = new Float32Array();
let v4;
try { v4 = BigUint64Array.from(15, 15); } catch (e) {}
v1.fill(Int32Array, 15, v4);
gc();
