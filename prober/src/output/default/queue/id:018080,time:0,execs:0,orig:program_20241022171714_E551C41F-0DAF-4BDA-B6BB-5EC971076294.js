const v3 = createGlobalObject().Float16Array;
Float32Array[0] = 1000;
const v5 = new Float32Array(Float32Array);
v3.from(v5).lastIndexOf(1000);
gc();
