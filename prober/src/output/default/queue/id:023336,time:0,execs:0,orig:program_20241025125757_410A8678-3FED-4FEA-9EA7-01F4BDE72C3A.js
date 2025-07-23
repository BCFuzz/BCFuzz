const v0 = `
    class C2 {
        static n(a4, a5, a6, a7) {
            /uxyz{1,32}/mgu;
        }
    }
    const v9 = new C2();
    const v12 = [C2.valueOf()];
    Reflect.apply(("YlW").matchAll, v9, v12);
    /\u{12345}/myvis;
`;
eval(v0);
gc();
