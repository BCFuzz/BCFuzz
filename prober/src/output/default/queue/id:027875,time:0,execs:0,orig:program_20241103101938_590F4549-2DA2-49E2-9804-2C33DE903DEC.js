function f1(a2, a3, a4, a5) {
    const o6 = {
        [-212017058]: a4,
    };
    return o6;
}
class C7 extends f1 {
}
class C8 extends C7 {
}
for (let v9 = 0; v9 < 10; v9++) {
    class C10 extends C8 {
    }
    new C10();
}
gc();
