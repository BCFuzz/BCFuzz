const v0 = [303537114,-4294967297,1000];
const v1 = [-1,9,4294967296,65536,10,49592,10];
v1[754] = v1;
const v2 = v1.copyWithin();
v1[858] = v1;
v2[1000] = Date();
const v6 = [];
Reflect.apply(v0.sort, v1, v6);
gc();
