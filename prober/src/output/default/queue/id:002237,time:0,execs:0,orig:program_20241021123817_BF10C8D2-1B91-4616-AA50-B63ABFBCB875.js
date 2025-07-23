class C1 {
}
const v2 = new C1();
const v3 = `
    const v4 = v2.h;
    const v6 = 10 & -4294967297;
    v6 | (v4 | -4294967297);
`;
eval(v3);
gc();
