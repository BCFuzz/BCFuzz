const v1 = new Float32Array(Float32Array, Float32Array);
const v2 = v1.buffer;
const v3 = v2.transferToFixedLength(v1, v1, Float32Array, v2, v2);
const v5 = new Uint16Array();
const v6 = v5.subarray(v3, v3);
try { v6.set(v1); } catch (e) {}
gc();
