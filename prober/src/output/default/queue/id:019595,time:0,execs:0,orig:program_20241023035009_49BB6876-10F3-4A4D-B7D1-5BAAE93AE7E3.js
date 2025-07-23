const v1 = new Float32Array(Float32Array);
const v3 = Array();
const v4 = [-1,9,4294967296,65536,10,49592,10];
const v5 = v4.fill(v1);
v5[1] = v3;
v5[0] = v5;
const v7 = [];
Reflect.apply(v4.sort, v4, v7);
gc();
