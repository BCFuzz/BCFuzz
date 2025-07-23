const v1 = [-65537,-128,-26529];
v1.reverse();
v1[65536] *= 65536;
const v4 = new Float32Array(v1);
v4.sort();
gc();
