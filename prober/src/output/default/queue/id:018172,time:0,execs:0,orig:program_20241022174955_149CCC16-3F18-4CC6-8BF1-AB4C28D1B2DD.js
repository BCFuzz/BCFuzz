const v1 = [303537114,-4294967297,1000];
const v2 = [-1,9,4294967296,65536,10,49592,10];
const v3 = v2.fill("function");
v3.unshift(v3);
const v6 = [];
Reflect.apply(v1.sort, v2, v6);
gc();
