const v1 = [303537114,-4294967297,1000];
const v2 = [-1,9,4294967296,65536,10,49592,10];
v2[365] = 7;
v2[1000] = Date();
const v6 = [Date];
Reflect.apply(v1.sort, v2, v6);
gc();
