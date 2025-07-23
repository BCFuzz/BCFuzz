class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(v1, C0, v1);
const v8 = [303537114,-4294967297,1000];
const v9 = [-1,9,4294967296,65536,10,49592,10];
v9[28] = v1;
Object.defineProperty(v9, 636, { writable: true, configurable: true, enumerable: true, value: v7 });
v9[1000] = Date();
const v13 = [];
Reflect.apply(v8.sort, v9, v13).join(Reflect);
gc();
