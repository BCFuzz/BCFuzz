const v1 = new Uint16Array();
const v2 = [303537114,-4294967297,1000];
const v3 = [-1,9,4294967296,65536,10,49592,10];
Object.defineProperty(v3, 636, { writable: true, configurable: true, enumerable: true, value: v1 });
const v5 = [];
Reflect.apply(v2.sort, v3, v5);
gc();
