const v2 = [303537114,-4294967297,1000];
const v3 = [-1,9,4294967296,65536,10,49592,10];
v3.copyWithin("", 2.0);
v3[858] = v3;
v3[1000] = Date("");
const v8 = [];
Reflect.apply(v2.sort, v3, v8);
gc();
