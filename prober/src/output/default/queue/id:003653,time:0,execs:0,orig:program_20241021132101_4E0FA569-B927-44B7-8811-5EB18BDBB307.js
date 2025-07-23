class C0 {
}
const v1 = new C0();
Object.defineProperty(Array, 0, { value: v1 });
gc();
