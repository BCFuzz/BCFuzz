function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v6 = [303537114,-4294967297,1000];
const v7 = [-1,9,4294967296,65536,10,49592,10];
Object.defineProperty(v7, 636, { writable: true, configurable: true, enumerable: true, value: v5 });
v7[1000] = Date();
const v11 = [];
Reflect.apply(v6.sort, v7, v11).join(Reflect);
gc();
