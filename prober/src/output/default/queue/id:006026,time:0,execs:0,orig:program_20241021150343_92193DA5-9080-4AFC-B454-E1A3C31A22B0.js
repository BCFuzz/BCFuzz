const v0 = `
    class C2 {
    }
    const v3 = new C2();
    let v4;
    try { v4 = v3.constructor(); } catch (e) {}
    v4 | true;
    new Int16Array(C2);
`;
eval(v0);
gc();
