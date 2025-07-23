const v1 = new Float32Array();
const v2 = [-1,9,4294967296,65536,10,49592,10];
const v3 = v2.fill(v1);
v3[0] = v3;
const v5 = [];
Reflect.apply(v2.sort, v2, v5);
gc();
