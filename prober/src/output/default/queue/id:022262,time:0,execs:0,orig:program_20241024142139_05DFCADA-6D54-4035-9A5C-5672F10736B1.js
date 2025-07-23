const v1 = [-65537,-128,-26529];
v1[65536] *= 65536;
const v3 = new Float32Array(v1);
v3.sort();
gc();
