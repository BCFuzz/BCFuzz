class C1 {
    o(a3) {
        const v4 = super.f;
        -1.0 / v4;
        v4?.a;
    }
}
const v7 = new C1();
for (let i = 0; i < 10; i++) {
    const v10 = [-16,-1.0];
    Reflect.apply(v7.o, v7, v10);
}
gc();
