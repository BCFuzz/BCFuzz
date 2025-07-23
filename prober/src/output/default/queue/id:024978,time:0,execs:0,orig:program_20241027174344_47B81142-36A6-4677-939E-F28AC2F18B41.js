const v1 = [1073741824,-3,65535];
v1[65536] *= 65536;
const v3 = new Float32Array(v1);
v3.sort();
gc();
