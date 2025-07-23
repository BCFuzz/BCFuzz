const v1 = [-5,-13,1459220665];
v1[65536] *= 65536;
const v3 = new Float32Array(v1);
v3.sort();
gc();
