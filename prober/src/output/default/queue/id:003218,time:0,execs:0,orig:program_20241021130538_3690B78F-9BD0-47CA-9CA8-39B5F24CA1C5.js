const o1 = {
};
Object.defineProperty(o1, "length", { configurable: true, value: 3 });
class C3 extends Set {
}
Reflect.construct(C3, o1);
gc();
