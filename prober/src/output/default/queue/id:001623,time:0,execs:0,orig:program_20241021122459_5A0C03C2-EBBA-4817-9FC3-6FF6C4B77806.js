const v2 = new Int8Array(254);
const v5 = new Float64Array(v2, 254, 254);
const v7 = [Int32Array,Int32Array,Int32Array,Int32Array,Int32Array];
v7[1] = v7;
const v8 = v5.includes;
try { v8.apply(Int32Array); } catch (e) {}
Reflect.apply(v8, v2, v7);
gc();
