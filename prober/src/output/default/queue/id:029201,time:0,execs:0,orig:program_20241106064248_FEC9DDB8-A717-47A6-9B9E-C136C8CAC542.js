const v2 = new Float64Array(3938);
const v5 = new Float32Array(v2.buffer);
v5.set(v2);
gc();
