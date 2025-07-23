const v3 = new Uint32Array(16);
const v4 = [303537114,-4294967297,1000];
const v5 = [-1,9,4294967296,65536,10,49592,10];
v5[951] = v3;
v5[858] = v5;
v5[1000] = Date(16);
const v8 = [];
Reflect.apply(v4.sort, v5, v8);
gc();
