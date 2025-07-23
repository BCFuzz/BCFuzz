const v0 = `
    class C1 {
    }
    const v2 = new C1();
    const v3 = [1073741823,-3];
    v3[16] = v2;
    16 in v3;
`;
eval(v0);
gc();
