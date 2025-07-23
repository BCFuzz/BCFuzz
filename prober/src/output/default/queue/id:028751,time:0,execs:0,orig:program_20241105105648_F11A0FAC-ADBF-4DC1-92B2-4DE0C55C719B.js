const v1 = new Float64Array(Float64Array);
const v4 = new Int8Array(v1.buffer);
v4.set(v1);
gc();
