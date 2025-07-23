class C0 {
    constructor(a2, a3) {
        class C4 {
            constructor(a6, a7, a8, a9) {
                let v10 = 1e-15;
                function f11(a12, a13) {
                    a13.length;
                    ({"length":v10,} = arguments);
                    return f11;
                }
                f11(a7, a6);
            }
        }
        new C4(C4);
    }
}
for (let i = 0; i < 10; i++) {
    Reflect.construct(C0, [Reflect,Reflect,Reflect,Reflect,Reflect]);
}
gc();
