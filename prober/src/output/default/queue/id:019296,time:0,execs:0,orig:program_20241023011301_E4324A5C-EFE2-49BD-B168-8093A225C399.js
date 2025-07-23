class C1 {
}
const v2 = new C1();
const v3 = new C1();
Object.defineProperty(v3, 4, { writable: true, value: undefined });
this.constructor.assign(v2, v3);
gc();
