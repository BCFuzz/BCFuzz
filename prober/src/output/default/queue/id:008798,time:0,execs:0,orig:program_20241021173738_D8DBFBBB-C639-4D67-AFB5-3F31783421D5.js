const v0 = `
    class C2 extends Date {
    }
    const v3 = new C2();
    const v4 = v3.toLocaleString;
    try { v4(v0, Date, v0, v4, Date); } catch (e) {}
`;
eval(v0);
gc();
