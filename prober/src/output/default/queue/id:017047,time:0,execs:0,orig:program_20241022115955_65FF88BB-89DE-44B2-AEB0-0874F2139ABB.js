const v1 = [-1901681873,-36844,7,1198414504,1073741823];
v1.reverse();
v1[65536] *= 65536;
const v4 = new Float32Array(v1);
v4.sort();
gc();
