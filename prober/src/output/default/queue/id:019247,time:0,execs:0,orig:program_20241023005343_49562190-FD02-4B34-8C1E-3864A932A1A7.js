const v0 = `
    class C1 {
        #o(a3) {
        }
    }
    function f4(a5, a6, a7) {
        return a6;
    }
    Reflect.construct(C1, [f4,f4,f4], f4);
`;
eval(v0);
gc();
