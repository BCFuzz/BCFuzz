const v2 = [303537114,-4294967297,1000];
const v3 = [-1,9,4294967296,65536,10,49592,10];
const v4 = v3.fill("function");
v4[Symbol.toPrimitive] = Date;
v4[1] = v4;
const v8 = [];
Reflect.apply(v2.sort, v3, v8);
gc();
