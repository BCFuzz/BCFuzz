const v1 = [9007199254740992,-8,-9007199254740992];
v1[65536] *= 65536;
const v3 = new Float32Array(v1);
v3.sort();
gc();
