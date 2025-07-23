for (let v0 = 0; v0 < 100; v0++) {
    class C3 extends Set {
    }
    new C3();
    Reflect.construct(Date, [Set], C3);
}
gc();
