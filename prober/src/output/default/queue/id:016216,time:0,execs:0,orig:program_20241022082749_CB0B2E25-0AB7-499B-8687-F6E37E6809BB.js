const v1 = Int32Array.bind(Int32Array, Int32Array, Int32Array);
const v2 = v1.bind(v1, v1);
v2.name = v2;
gc();
