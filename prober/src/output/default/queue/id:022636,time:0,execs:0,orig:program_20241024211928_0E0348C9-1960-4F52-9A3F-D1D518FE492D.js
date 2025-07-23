const v1 = [2022379016,16,-91382334,-1,29,65537];
v1.shift();
v1[65536] *= 65536;
const v4 = new Float32Array(v1);
v4.sort();
gc();
