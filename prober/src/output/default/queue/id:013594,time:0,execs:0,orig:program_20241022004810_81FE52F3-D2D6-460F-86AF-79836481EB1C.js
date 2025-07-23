const v1 = new Int16Array(Int16Array, Int16Array);
const v2 = v1.subarray;
const v5 = new Uint16Array(3578);
try { v5.map(v2); } catch (e) {}
gc();
