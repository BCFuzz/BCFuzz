const v1 = `
    class C2 extends Array {
        g;
    }
    new C2();
`;
eval(v1);
gc();
