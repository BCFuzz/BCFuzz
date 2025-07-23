const v1 = [303537114,-4294967297,1000];
const v2 = [-1,9,4294967296,65536,10,49592,10];
v2.fill(-9);
v2[6] = v2;
v2[1000] = Date(-9);
const v7 = [];
Reflect.apply(v1.sort, v2, v7);
gc();
