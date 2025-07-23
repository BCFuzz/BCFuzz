const v0 = [-1.7976931348623157e+308,4.998892638603113];
v0.reverse();
v0[65536] *= 65536;
const v4 = new Float32Array(v0);
v4.sort();
gc();
