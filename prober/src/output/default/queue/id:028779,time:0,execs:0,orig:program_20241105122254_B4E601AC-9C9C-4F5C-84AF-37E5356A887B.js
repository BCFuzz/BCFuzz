Float64Array[0] = 4.0;
const v2 = new Float64Array(Float64Array);
const v5 = new Int8Array(v2.buffer);
v5.set(v2);
gc();
