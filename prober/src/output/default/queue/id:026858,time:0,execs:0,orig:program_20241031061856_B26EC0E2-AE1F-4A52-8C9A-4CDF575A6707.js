const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new Float32Array(v1, v2);
const v5 = v4.buffer;
const v7 = new v2(v5.transferToFixedLength(v2, v5, Float32Array, v2, Float32Array), v1);
const v8 = v7.subarray(v7, v7);
try { v8.set(v4); } catch (e) {}
gc();
