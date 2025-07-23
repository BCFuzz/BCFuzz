const v0 = `
    class C1 {
        #o(a3) {
        }
    }
    const v4 = new C1();
    try { v4.constructor(); } catch (e) {}
`;
eval(v0);
gc();
