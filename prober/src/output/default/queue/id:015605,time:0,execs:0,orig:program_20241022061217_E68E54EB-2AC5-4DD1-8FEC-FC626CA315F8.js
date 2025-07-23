const v0 = `
    class C2 {
    }
    const v3 = new C2();
    ("e" >>> v3) % -5;
`;
eval(v0);
gc();
