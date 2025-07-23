class C1 {
    static 8 = 9;
}
const t3 = Reflect.preventExtensions;
t3(C1);
gc();
