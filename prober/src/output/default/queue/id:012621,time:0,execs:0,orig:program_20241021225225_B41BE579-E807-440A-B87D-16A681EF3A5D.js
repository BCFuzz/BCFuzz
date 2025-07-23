const v1 = `
    class C3 extends Date {
    }
    "64" instanceof C3;
`;
eval(v1);
gc();
