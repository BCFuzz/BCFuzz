const v1 = [303537114,-4294967297,1000];
const v2 = [-1,9,4294967296,65536,10,49592,10];
v2[858] = v2;
Object.defineProperty(v2, 552, { configurable: true, value: 4096 });
v2[1000] = Date(4096);
const v6 = [];
Reflect.apply(v1.sort, v2, v6);
gc();
