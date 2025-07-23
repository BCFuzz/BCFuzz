class C0 {
    constructor(a2, a3) {
        class C4 {
            constructor(a6, a7, a8, a9) {
                let v10 = 1e-15;
                function f11(a12, a13) {
                    ({"length":v10,} = arguments);
                    return a12;
                }
                f11();
                f11(v10, C4);
            }
        }
        const v17 = new C4();
        const t14 = v17.constructor;
        new t14(C4);
    }
}
for (let i = 0; i < 5; i++) {
    Reflect.construct(C0, [Reflect,Reflect,Reflect]);
}
gc();
