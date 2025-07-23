const v1 = [-1901681873,-36844,7,1198414504,1073741823];
v1.shift();
const v3 = v1.reverse();
v3.shift(v3, v3, 65536);
v1[65536] *= 65536;
const v6 = new Float64Array(v1);
v6.sort();
gc();
