const v1 = new Float32Array();
const v3 = ~v1[0];
class C5 {
}
const v6 = new C5();
Object.defineProperty(v6, 4, { writable: true, value: v3 });
const v7 = new C5();
Object.defineProperty(v7, 4, { writable: true, configurable: true, enumerable: true, value: undefined });
this.constructor.assign(v6, v7);
gc();
