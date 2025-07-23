class C0 {
}
const v1 = new C0();
const o2 = {
};
Reflect.setPrototypeOf(v1, o2);
Reflect.defineProperty(Reflect, Reflect, o2);
gc();
